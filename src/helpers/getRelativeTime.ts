import { formatDistance, parseISO } from "date-fns";

function getRelativeTime(dateValue: string): string {
  return formatDistance(parseISO(dateValue), new Date(), { addSuffix: true });
}

export default getRelativeTime;
