import React, { useState, useContext, useEffect } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { BookFlightContext } from "../App";

const BookingTimePicker = (props) => {
  const { bookDateProperty, bookDateLabel } = props;

  const bookFlightContext = useContext(BookFlightContext);

  const [dateValue, setDateValue] = useState(new Date());

  useEffect(() => {
    console.log(bookFlightContext.book);
  }, [dateValue]);

  if (bookDateProperty === "departureDate") {
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
          <MobileDateTimePicker
            label={bookDateLabel}
            value={bookFlightContext.book.departureDate}
            onChange={(departure) => {
              setDateValue(departure);
              bookFlightContext.setBook({
                ...bookFlightContext.book,
                departureDate: departure,
              });
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
    );
  } else if (bookDateProperty === "returnDate") {
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
          <MobileDateTimePicker
            label={bookDateLabel}
            value={bookFlightContext.book.returnDate}
            onChange={(arrival) => {
              setDateValue(arrival);
              bookFlightContext.setBook({
                ...bookFlightContext.book,
                returnDate: arrival,
              });
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
    );
  }
};

export default BookingTimePicker;
