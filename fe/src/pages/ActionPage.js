import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Paper, Stack, Typography } from "@mui/material/";

import CountryTable from "./CountryTable";
import {
  addCountry,
  getNewCountries,
  getNewCountry,
  getUserData,
} from "../services/countryService";

export default () => {
  const [userData, setUserData] = useState({ name: "", email: "" });
  const [rows, setRows] = useState([
    createData("India", "IN", 1324171354, 3287263),
    createData("China", "CN", 1403500365, 9596961),
    createData("Italy", "IT", 60483973, 301340),
  ]);

  //  This one happens only for the first page load, because
  // its second parameter is an empty array
  useEffect(() => {
    console.log("Getting basic user data");
    getUserData().then((response) => setUserData(response.data));
  }, []);

  // This one runs on every change
  useEffect(() => console.log("-- I am here!"));

  // This one is triggered if the state in the array has a change
  useEffect(() => {
    console.log("-- rows are refreshed");
  }, [rows]);

  // Helper function which merges the old country list with the new item(s)
  const addNewCountryData = (countryData) => {
    console.log('Add new country')
    const mapped = countryData.map((rowItem) =>
      createData(
        rowItem.countryName,
        rowItem.countryCode,
        rowItem.population,
        rowItem.size
      )
    );

    const united = [...rows, ...mapped];
    setRows(united);
  };

  // These three run on button clicks
  const handleOneNewCountry = async () => {
    const newCountries = await getNewCountry();
    addNewCountryData([newCountries.data]);
  };

  const handleGetNewCountriesClick = async () => {
    const newCountries = await getNewCountries();
    addNewCountryData(newCountries.data);
  };

  const handleSendNewCountryClick = async () => {
    const newCountry = {
      countryName: "Vanuatu",
      countryCode: "VU",
      countrySomething: "something",
      capital: "Port Vila",
    };

    const addResponse = await addCountry(newCountry);

    console.log("country added");
    console.log(addResponse);
  };

  // helper function for data formatting for the table
  function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
  }

  return (
    <Container sx={{ paddingTop: "25px" }}>
      <Button component={Link} to={"/"} variant="contained">
        back{" "}
      </Button>
      <Paper
        sx={{
          margin: "50px",
          padding: "50px",
        }}
      >
        <Typography variant="h3">{`user is ${userData.name}`}</Typography>

        <Stack direction="column">
          <Button
            sx={{
              marginTop: "50px",
            }}
            onClick={handleOneNewCountry}
            variant="contained"
            color="secondary"
          >
            Get one new country only
          </Button>

          <Button
            sx={{
              marginTop: "50px",
            }}
            onClick={handleGetNewCountriesClick}
            variant="contained"
            color="secondary"
          >
            Get new countries
          </Button>

          <Button
            sx={{
              marginTop: "50px",
            }}
            onClick={handleSendNewCountryClick}
            variant="contained"
            color="secondary"
          >
            Send Vanuatu to backend
          </Button>
        </Stack>
      </Paper>

      {/* 
         example table is from https://mui.com/material-ui/react-table/
   */}
      <CountryTable rows={rows} />
    </Container>
  );
};
