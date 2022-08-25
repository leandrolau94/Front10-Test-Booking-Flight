import React, { useState, useContext, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { BookFlightContext } from "../App";

const Booking = (props) => {
  const { bookProperty, bookOptions, bookLabel } = props;

  const bookFlightContext = useContext(BookFlightContext);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    console.log(bookFlightContext.book);
  }, [bookFlightContext.book[bookProperty]]);

  if (bookProperty === "flightType") {
    return (
      <Autocomplete
        value={bookFlightContext.book.flightType}
        onChange={(event, newValue) => {
          bookFlightContext.setBook({
            ...bookFlightContext.book,
            flightType: newValue,
          });
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={bookOptions}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={bookLabel} />}
      />
    );
  } else if (bookProperty === "travelClass") {
    return (
      <Autocomplete
        value={bookFlightContext.book.travelClass}
        onChange={(event, newValue) => {
          bookFlightContext.setBook({
            ...bookFlightContext.book,
            travelClass: newValue,
          });
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={bookOptions}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={bookLabel} />}
      />
    );
  } else if (bookProperty === "origin") {
    return (
      <Autocomplete
        value={bookFlightContext.book.origin}
        onChange={(event, newValue) => {
          bookFlightContext.setBook({
            ...bookFlightContext.book,
            origin: newValue,
          });
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={bookOptions}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={bookLabel} />}
      />
    );
  } else if (bookProperty === "destination") {
    return (
      <Autocomplete
        value={bookFlightContext.book.destination}
        onChange={(event, newValue) => {
          bookFlightContext.setBook({
            ...bookFlightContext.book,
            destination: newValue,
          });
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={bookOptions}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={bookLabel} />}
      />
    );
  }
};

export default Booking;
