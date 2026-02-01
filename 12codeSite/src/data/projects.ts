import { contentUrl, loadJson } from "../lib/content";
import type { ProjectData, ProjectResolved } from "../types";

export async function getProjects(): Promise<ProjectResolved[]> {
  const projects = await loadJson<ProjectData[]>("data/projects.json");

  return projects.map((p) => {
    if (!p.mainImageKey) {
      throw new Error(
        `Project "${p.id}" is missing mainImageKey in projects.json`,
      );
    }

    return {
      ...p,
      mainImageUrl: contentUrl(p.mainImageKey),
      images: (p.images ?? []).map((img) => {
        if (!img.key) {
          throw new Error(`Project "${p.id}" has an image missing key`);
        }
        return { key: img.key, url: contentUrl(img.key), caption: img.caption };
      }),
    };
  });
}
