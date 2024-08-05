import { CITIES } from "../../../components/CitiesConstants";
//Function to get a random city from the cities constants and return it as a response
export async function GET() {
  const citiesArray = Object.values(CITIES);
  const randomIndex = Math.floor(Math.random() * citiesArray.length);
  const randomCity = citiesArray[randomIndex];

  return Response.json({ cities: randomCity });
}
