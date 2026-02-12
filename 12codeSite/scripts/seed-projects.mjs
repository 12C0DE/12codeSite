import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import AWS from "aws-sdk";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..", "..");

const tableName = process.env.PROJECTS_TABLE;
if (!tableName) {
  throw new Error("PROJECTS_TABLE environment variable is required");
}

const sourcePath = process.env.PROJECTS_SOURCE_PATH
  ? path.resolve(process.cwd(), process.env.PROJECTS_SOURCE_PATH)
  : path.join(repoRoot, "projects.json");

const data = JSON.parse(await fs.readFile(sourcePath, "utf8"));
if (!Array.isArray(data)) {
  throw new Error("Expected projects source file to be a JSON array");
}

const docClient = new AWS.DynamoDB.DocumentClient();

function normalizeImage(image) {
  if (typeof image?.key === "string") {
    return { key: image.key, caption: image.caption };
  }

  if (typeof image?.url === "string") {
    return { key: image.url, caption: image.caption };
  }

  throw new Error("Each image must include key or url");
}

for (const project of data) {
  const item = {
    ...project,
    mainImageKey: project.mainImageKey ?? project.mainImage,
    images: (project.images ?? []).map(normalizeImage),
  };

  if (!item.id || !item.mainImageKey) {
    throw new Error(`Project is missing id or mainImageKey: ${JSON.stringify(project)}`);
  }

  delete item.mainImage;

  await docClient
    .put({
      TableName: tableName,
      Item: item,
    })
    .promise();

  console.log(`Upserted ${item.id}`);
}
