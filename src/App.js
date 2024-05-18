import React from "react";
import { Route, Routes } from "react-router-dom";

import { ThemeProvider } from "./context/ThemeContext";

//Components
import { Header } from "./components";
import Country from "./views/CountryDetail/Country.tsx"
import CountryList from "./views/AllCountries/CountryList";


export const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path="/:name" element={<Country />} />
          <Route path="/" element={<CountryList />} />
        </Routes>
      </ThemeProvider>
    </React.Fragment>
  );
};
