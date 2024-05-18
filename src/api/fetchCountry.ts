import { SingleCountryInterface } from "../types/interfaces";

export const fetchCountry = async (name: string): Promise<SingleCountryInterface | null> => {
  try {
    const url = `https://restcountries.com/v2/name/${name}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching country: ${response.statusText}`);
    }
    const data = await response.json();
    return data[0] as SingleCountryInterface;
  } catch (error) {
    console.error("Error fetching country data:", error);
    return null;
  }
};
