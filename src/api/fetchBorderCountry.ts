export const fetchBorderCountry = async (border: string): Promise<string | null> => {
    try {
      const url = `https://restcountries.com/v2/alpha/${border}`;
      const response = await fetch(url);
      const data = await response.json();
      return data.name;
    } catch (error) {
      console.error("Error fetching border country data:", error);
      return null;
    }
  };
  