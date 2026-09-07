const YOUTUBE_ID = /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([A-Za-z0-9_-]{11})/;

export function youtubeEmbedSrc(url: string): string | null {
  const match = url.match(YOUTUBE_ID);
  return match ? `https://www.youtube-nocookie.com/embed/${match[1]}` : null;
}
