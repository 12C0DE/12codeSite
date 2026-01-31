import { contentUrl, loadJson } from "../lib/content";
import type { ProjectRemote, ProjectResolved } from "../types/index";

export async function getProjects(): Promise<ProjectResolved[]> {
  const remote = await loadJson<ProjectRemote[]>("data/projects.json");

  return remote.map((p) => ({
    ...p,
    mainImageUrl: contentUrl(p.mainImageKey),
    images: (p.images ?? []).map((img) => ({
      url: contentUrl(img.key),
      caption: img.caption,
    })),
  }));
}
