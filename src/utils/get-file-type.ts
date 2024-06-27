export function getFileType(url: string): "image" | "video" {
	const extension = url.split(".").pop()?.toLowerCase();
	if (!extension) return "image";
	const videoExtensions = ["mp4", "webm", "ogg"];
	return videoExtensions.includes(extension) ? "video" : "image";
}
