export function projectSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function projectSectionHref(slug: string): string {
  return `/projects#${slug}`;
}
