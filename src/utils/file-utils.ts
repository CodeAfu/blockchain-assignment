export function getFileType(mimeType: string): "IMAGE" | "VIDEO" | "AUDIO" | undefined {
  if (mimeType.startsWith("image/")) return "IMAGE";
  if (mimeType.startsWith("video/")) return "VIDEO";
  if (mimeType.startsWith("audio/")) return "AUDIO";
  return;
}

export function getFileBaseName(filename: string): string {
  const lastDotIndex = filename.lastIndexOf(".");
  return lastDotIndex !== -1 ? filename.slice(0, lastDotIndex) : filename;
}
