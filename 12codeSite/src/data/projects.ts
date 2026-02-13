import { contentUrl } from "../lib/content";
import type { ProjectRemote, ProjectResolved } from "../types";

const projectsApiUrl = import.meta.env.VITE_PROJECTS_API_URL;

function toImageUrl(pathOrUrl: string): string {
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }

  return contentUrl(pathOrUrl);
}

function getImageKey(image: { key?: string; url?: string }, projectId: string): string {
  const keyOrUrl = image.key ?? image.url;

  if (!keyOrUrl) {
    throw new Error(`Project "${projectId}" has an image missing key/url`);
  }

  return keyOrUrl;
}

export async function getProjects(): Promise<ProjectResolved[]> {
  if (!projectsApiUrl) {
    throw new Error("VITE_PROJECTS_API_URL is not configured");
  }

  const res = await fetch(projectsApiUrl, { cache: "no-store" });

  if (!res.ok) {
    throw new Error(`Failed to load projects from API: ${res.status}`);
  }

  const projects = (await res.json()) as ProjectRemote[];

  return projects.map((p) => {
    if (!p.mainImageKey) {
      throw new Error(`Project "${p.id}" is missing mainImageKey`);
    }

    return {
      ...p,
      mainImageUrl: toImageUrl(p.mainImageKey),
      images: (p.images ?? []).map((img) => {
        const key = getImageKey(img, p.id);
        return {
          key,
          url: toImageUrl(key),
          caption: img.caption,
        };
      }),
    };
  });
}
