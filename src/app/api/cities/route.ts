import { CITIES } from "../../../components/CitiesConstants";

export async function GET() {
  const citiesArray = Object.values(CITIES);
  const randomIndex = Math.floor(Math.random() * citiesArray.length);
  const randomCity = citiesArray[randomIndex];

  return Response.json({ cities: randomCity });
}
