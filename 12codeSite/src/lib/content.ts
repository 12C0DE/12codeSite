const bucket = import.meta.env.VITE_CONTENT_BUCKET_NAME;
const region = import.meta.env.VITE_AWS_REGION;

export const contentUrl = (key: string) =>
  `https://${bucket}.s3.${region}.amazonaws.com/${key}`;

export async function loadJson<T>(key: string): Promise<T> {
  const res = await fetch(contentUrl(key), { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to load ${key}: ${res.status}`);
  return res.json() as Promise<T>;
}
