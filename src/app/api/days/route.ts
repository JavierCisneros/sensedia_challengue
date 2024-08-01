import { DAYS } from "@/components/DaysConstants";

const DAY_ORDER = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export async function GET() {
  const daysArray = Object.values(DAYS);
  const randomCount = Math.floor(Math.random() * daysArray.length) + 1;
  const selectedIndexes = new Set();
  const randomDays = [];

  while (selectedIndexes.size < randomCount) {
    const randomIndex = Math.floor(Math.random() * daysArray.length);
    if (!selectedIndexes.has(randomIndex)) {
      selectedIndexes.add(randomIndex);
      randomDays.push(daysArray[randomIndex]);
    }
  }

  randomDays.sort((a, b) => {
    return DAY_ORDER.indexOf(a.name) - DAY_ORDER.indexOf(b.name);
  });

  return Response.json({ days: randomDays });
}
