export const formatDateTime = (dateTime) => {
  if (!dateTime) return "-";

  const date = new Date(dateTime.replace(" ", "T"));

  return date.toLocaleString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};