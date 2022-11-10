import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import AccordionItem from "../AccordionItem";
import "./style.css";

const CountryWidget = () => {
  const [countryList, setCountryList] = useState([]);
  const [initData, setInitData] = useState([]);
  const [criteria, setCriteria] = useState("");
  const [selectedCriteria, setSelectedCriteria] = "";

  const filterList = () => {};

  useEffect(() => {
    getAllCountries();
  }, []);

  const getAllCountries = () => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      console.log(res.data);
      setCountryList(res.data?.slice(0, 19));
    });
  };

  return (
    <div className="CountryWidget">
      <h3>Countries Widget</h3>
      {countryList.map((country) => {
        return <AccordionItem country={country} key={country.name} />;
      })}
      {/* <SearchComponent selectedCriteria={selectedCriteria} onUserInput={(criteria) => } onSelectedCriteria ={(val) => setSelectedCriteria(val)}/> */}
    </div>
  );
};

export default CountryWidget;
