export function formatProjectDate(isoDate: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  }).format(new Date(isoDate));
}

export function formatProjectDateRange(startDate: string, endDate?: string) {
  const start = formatProjectDate(startDate);

  if (!endDate) {
    return `${start} – Present`;
  }

  return `${start} – ${formatProjectDate(endDate)}`;
}
