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

    return {
      contentBucketName: content.name,
      region: aws.getRegionOutput().name,
    };
  },
});
