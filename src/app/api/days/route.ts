import { DAYS } from "../../../components/DaysConstants";
//Days order to sort the random days that are gotten from the constants
const DAY_ORDER = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
//Function to get a random day from the days constants and return it as a response
export async function GET() {
  const daysArray = Object.values(DAYS);
  const randomCount = Math.floor(Math.random() * daysArray.length) + 1;
  const selectedIndexes = new Set();
  const randomDays = [];
  //This code check if the random day is already selected, if not, it adds it to the selected days
  while (selectedIndexes.size < randomCount) {
    const randomIndex = Math.floor(Math.random() * daysArray.length);
    if (!selectedIndexes.has(randomIndex)) {
      selectedIndexes.add(randomIndex);
      randomDays.push(daysArray[randomIndex]);
    }
  }
  //Sort the random days by the order of the days of the week
  randomDays.sort((a, b) => {
    return DAY_ORDER.indexOf(a.name) - DAY_ORDER.indexOf(b.name);
  });

  return Response.json({ days: randomDays });
}
