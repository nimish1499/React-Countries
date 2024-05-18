import React, { useState, useEffect} from "react";

import CountryCard from "./CountryCard";
import { CountriesInterface } from "../../types/interfaces";
import FilteredCountries from "./FilteredCountries";
import { Loader, Search } from "../../components";

import "./countries.css"

const CountryList = () => {
  
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [foundFilter, setFoundFilter] = useState(false);
  const [filtered, setFiltered] = useState<CountriesInterface[] | null>(null);
  const [searchInput, setSearchInput] = useState("");


  useEffect(() => {

    const fetchCountries = async (): Promise<void> => {
      try {
        const url = `https://restcountries.com/v2/all`;
        const response = await fetch(url);
        const data = await response.json();
        setCountries(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchCountries()
  }, []);
  
  const searchCountries = (searchValue: string): void => {
    setSearchInput(searchValue);
    if (searchInput) {
        let filter: CountriesInterface[] = countries.filter((country) =>
        Object.values(country)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      );
      setFiltered(
        filter
      );

      if (filter.length === 0) {
        setFoundFilter(false);
      } else {
        setFoundFilter(true);
      }
    }
    else {
      setFiltered(countries);
    }
  };


  const resetInput = (): void => {
    return setSearchInput("");
  }
  return (
    <main>
      {isLoading ? (
       <Loader/>
      ) : (
        <>
          <Search
            searchCountries={searchCountries}
            searchInput={searchInput}
            setCountries={setCountries}
            resetInput={resetInput}
          />
          {searchInput?.length > 0 ? (
            <FilteredCountries filtered={filtered} foundFilter={foundFilter} />
          ) : (
            <CountryCard countries={countries} />
          )}
        </>
      )}
    </main>
  );
}


export default CountryList;