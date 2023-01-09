import { Autocomplete, TextField } from "@mui/material";
import React, { useState } from "react";
import countries from "countries-list";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDisplay, setOptions } from "../../redux/actions/Display";
import axios from "axios";
import MyMap from "./components/Mapp";

const Dashboard = () => {
  const [latLng, setLatLng] = useState({ lat: 0, lng: 0 });

  const dispatch = useDispatch();

  const optionCountry = useSelector((state) => state.displayData.optionCountry);
  const display = useSelector((state) => state.displayData.display);

  const getTheMap = async (display) => {
    try {
      const endpoint = "https://nominatim.openstreetmap.org/search";
      const params = { format: "json", q: display, limit: 1 };
      const response = await axios.get(endpoint, { params });
      if (response.data.length > 0) {
        const location = response.data[0];
        setLatLng({ lat: location.lat, lng: location.lng });
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const nameOfCountries = Object.values(countries?.countries);

    let AllNames = [];
    nameOfCountries.forEach((d) => {
      AllNames.push(d?.name);
    });

    dispatch(setOptions(AllNames));
  }, [dispatch]);

  useEffect(() => {
    getTheMap(display);
  }, [display]);

  return (
    <div>
      <div style={{ margin: 20 }}>
        <Autocomplete
          id="country-autocomplete"
          options={optionCountry}
          getOptionLabel={(option) => option}
          onChange={(event, newValue) => {
            dispatch(setDisplay(newValue));
          }}
          renderInput={(params) => (
            <TextField {...params} label="Country" variant="outlined" />
          )}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <MyMap latLng={latLng} />
      </div>
    </div>
  );
};

export default Dashboard;
