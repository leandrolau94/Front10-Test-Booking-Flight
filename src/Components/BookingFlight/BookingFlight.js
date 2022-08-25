import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Booking from "./Booking";
import BookingTimePicker from "./BookingTimePicker";
import { BookFlightContext } from "../App";
import Stack from "@mui/material/Stack";
import Item from "./Item";

const departureFlights = [
  "La Habana",
  "Mexico",
  "Russia",
  "France",
  "Italy",
  "Portugal",
  "Spain",
];

const arrivalFlights = [
  "Santiago de Cuba",
  "Brazil",
  "Panama",
  "Canada",
  "Armenia",
  "England",
  "Amsterdam",
];

const fTypes = [
  "Just Departure",
  "Departure and Return",
  "Multi-destination",
  "Travel Generator",
];

const tClass = ["Economic", "Economic Premium", "Bussiness", "First", "Mixed"];

const BookingFlight = () => {
  const bookFlightContext = useContext(BookFlightContext);

  return (
    <>
      <Typography variant="h3" gutterBottom>
        Search Hundreds of travel sites at once.
      </Typography>
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: "primary.light",
          padding: 5,
          borderRadius: "10px",
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={4} md={4}>
            <Booking
              bookProperty={"flightType"}
              bookOptions={fTypes}
              bookLabel={"Flight Type"}
            />
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Booking
              bookProperty={"travelClass"}
              bookOptions={tClass}
              bookLabel={"Travel Class"}
            />
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Booking
              bookProperty={"origin"}
              bookOptions={departureFlights}
              bookLabel={"Origin"}
            />
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Booking
              bookProperty={"destination"}
              bookOptions={arrivalFlights}
              bookLabel={"Destination"}
            />
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <BookingTimePicker
              bookDateProperty={"departureDate"}
              bookDateLabel={"Departure Date"}
            />
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <BookingTimePicker
              bookDateProperty={"returnDate"}
              bookDateLabel={"Return Date"}
            />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Stack spacing={2}>
          <Item>
            <Typography variant="h6" gutterBottom>
              Booking Flight Information:
            </Typography>
          </Item>
          <Item>
            <Typography variant="h6" gutterBottom>
              {bookFlightContext.book.flightType !== (null || "")
                ? `Flight Type: ${bookFlightContext.book.flightType}`
                : `Flight Type: not selected yet`}
            </Typography>
          </Item>
          <Item>
            <Typography variant="h6" gutterBottom>
              {bookFlightContext.book.travelClass !== (null || "")
                ? `Travel Class: ${bookFlightContext.book.travelClass}`
                : `Travel Class: not selected yet`}
            </Typography>
          </Item>
          <Item>
            <Typography variant="h6" gutterBottom>
              {bookFlightContext.book.origin !== (null || "")
                ? `Origin: ${bookFlightContext.book.origin}`
                : `Origin: not selected yet`}
            </Typography>
          </Item>
          <Item>
            <Typography variant="h6" gutterBottom>
              {bookFlightContext.book.destination !== (null || "")
                ? `Destination: ${bookFlightContext.book.destination}`
                : `Destination: not selected yet`}
            </Typography>
          </Item>
          <Item>
            <Typography variant="h6" gutterBottom>
              {bookFlightContext.book.departureDate !== (null || "")
                ? `Departure Date: ${bookFlightContext.book.departureDate}`
                : `Departure Date: not selected yet`}
            </Typography>
          </Item>
          <Item>
            <Typography variant="h6" gutterBottom>
              {bookFlightContext.book.returnDate !== (null || "")
                ? `Returne Date: ${bookFlightContext.book.returnDate}`
                : `Returne Date: not selected yet`}
            </Typography>
          </Item>
        </Stack>
      </Box>
    </>
  );
};

export default BookingFlight;
