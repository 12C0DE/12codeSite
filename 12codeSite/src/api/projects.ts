import type { APIGatewayProxyHandlerV2 } from "aws-lambda";
import AWS from "aws-sdk";
import type { ProjectRemote } from "../types";

declare const process: { env: Record<string, string | undefined> };

const documentClient = new AWS.DynamoDB.DocumentClient();

const requiredProjectFields: (keyof ProjectRemote)[] = [
  "id",
  "title",
  "category",
  "description",
  "detailedDescription",
  "tags",
  "role",
  "team",
  "timeline",
  "links",
  "mainImageKey",
  "images",
  "challenges",
  "solution",
  "impact",
];

function isProjectRemote(value: unknown): value is ProjectRemote {
  if (!value || typeof value !== "object") {
    return false;
  }

  const record = value as Record<string, unknown>;
  return requiredProjectFields.every((field) => field in record);
}

export const handler: APIGatewayProxyHandlerV2 = async () => {
  const tableName = process.env.PROJECTS_TABLE;

  if (!tableName) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "PROJECTS_TABLE environment variable is not set",
      }),
    };
  }

  const projects: ProjectRemote[] = [];
  let exclusiveStartKey: AWS.DynamoDB.DocumentClient.Key | undefined;

  do {
    const response = await documentClient
      .scan({
        TableName: tableName,
        ExclusiveStartKey: exclusiveStartKey,
      })
      .promise();

    for (const item of response.Items ?? []) {
      if (!isProjectRemote(item)) {
        continue;
      }

      projects.push(item);
    }

    exclusiveStartKey = response.LastEvaluatedKey;
  } while (exclusiveStartKey);

  projects.sort((a, b) => a.title.localeCompare(b.title));

  return {
    statusCode: 200,
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(projects),
  };
};
