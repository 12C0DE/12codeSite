/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "code12site",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    const content = new sst.aws.Bucket("Content", {
      access: "public",
    });

    const projects = new sst.aws.Dynamo("Projects", {
      fields: { id: "string" },
      primaryIndex: { hashKey: "id" },
    });

    const api = new sst.aws.Function("ProjectsApi", {
      handler: "12codeSite/src/api/projects.handler",
      url: {
        cors: {
          allowOrigins: ["*"],
          allowMethods: ["GET", "OPTIONS"],
          allowHeaders: ["content-type"],
        },
      },
      environment: {
        PROJECTS_TABLE: projects.name,
      },
      link: [projects],
    });

    return {
      contentBucketName: content.name,
      projectsTableName: projects.name,
      projectsApiUrl: api.url,
      region: aws.getRegionOutput().name,
    };
  },
});
