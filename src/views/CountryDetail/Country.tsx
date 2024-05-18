import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { SingleCountryInterface } from '../../types/interfaces';
import { Loader } from '../../components';
import { fetchCountry, fetchBorderCountry } from '../../api';

import './country.css';

const Country = () => {
  const [country, setCountry] = useState<SingleCountryInterface | null>(null);
  const [borderCountries, setBorderCountries] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { name } = useParams<{ name: string }>();

  useEffect(() => {
    const fetchData = async (name:string) => {
      try {
        setIsLoading(true);
        const countryData = await fetchCountry(name);
        if (!countryData) {
          throw new Error(`Country with name '${name}' not found.`);
        }
        setCountry(countryData);

        const borderPromises = countryData.borders.map((border: string) => fetchBorderCountry(border));
        const borderResults = await Promise.all(borderPromises);
        setBorderCountries(borderResults.filter(Boolean) as string[]);

        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching country data:', error);
        setIsLoading(false);
      }
    };

    if (name) {
      fetchData(name);
    }
  }, [name]);

  return (
    <main>
      {isLoading ? (
        <Loader />
      ) : (
        <AnimatePresence>
          <Link to="/" className="back-link">
            <span>&larr;</span> Back
          </Link>
          {country && (
            <section key={name} className="country-block">
              <motion.img
                initial={{ opacity: 0, translateX: -500 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, translateX: -500 }}
                src={country.flags.svg}
                alt={name}
              />
              <section className="country-block-info">
                <h2>{name}</h2>
                <section className="details-block">
                  <ul className="details-block-one">
                    <li>
                      <span>Native Name:</span> {country.nativeName ?? ""}
                    </li>
                    <li>
                      <span>Population:</span>{' '}
                      {country.population.toLocaleString()}
                    </li>
                    <li>
                      <span>Region:</span> {country.region ?? ""}
                    </li>
                    <li>
                      <span>Sub Region:</span> {country.subregion ?? ""}
                    </li>
                    <li>
                      <span>Capital:</span> {country.capital ?? ""}
                    </li>
                  </ul>
                  <ul className="details-block-two">
                    <li>
                      <span>Top Level Domain:</span> {country.topLevelDomain ?? ""}
                    </li>
                    <li>
                      <span>Currencies:</span>{' '}
                      {country.currencies
                        ? country.currencies[0]?.name
                        : 'Unknown'}
                    </li>
                    <li>
                      <span>Languages:</span> {country.languages
                        ? country.languages[0]?.name
                        : 'Unknown'}
                    </li>
                  </ul>
                </section>
                <section className="border-countries">
                  <p className="border-countries-title">Border Countries:</p>
                  {borderCountries.length > 0 ? (
                    borderCountries.map((borderCountry, index) => (
                      <Link
                        key={index}
                        className="border-country"
                        to={`/${borderCountry}`}
                      >
                        <motion.div
                          initial={{ opacity: 0, translateY: -50 }}
                          animate={{ opacity: 1, translateY: 0 }}
                          transition={{
                            duration: 0.2,
                            delay: index * 0.1,
                          }}
                        >
                          {borderCountry}
                        </motion.div>
                      </Link>
                    ))
                  ) : (
                    <p>No Borders...</p>
                  )}
                </section>
              </section>
            </section>
          )}
        </AnimatePresence>
      )}
    </main>
  );
};

export default Country;
