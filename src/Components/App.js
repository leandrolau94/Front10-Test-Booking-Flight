import React, { useState, useEffect } from "react";
import axios from "axios";
import BookingFlight from "./BookingFlight/BookingFlight";
// Setting up router
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//creating context
export const BookFlightContext = React.createContext(null);

const baseURL = `https://www.kayak.com/`; // unsuccessfull data fetching here.
// const baseURL = "https://jsonplaceholder.typicode.com/posts/1";//successfull data fetching here.

const initialBookState = {
  flightType: "",
  passengerSelector: "",
  travelClass: "",
  origin: "",
  destination: "",
  departureDate: new Date(),
  returnDate: new Date(),
};

const App = () => {
  const [book, setBook] = useState(initialBookState);

  const [flightData, setFlightData] = useState([]);

  const getFlightData = () => {
    axios
      .get(`${baseURL}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          // origin: "x-requested-with",
          "Access-Control-Allow-Headers": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          // "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        setFlightData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getFlightData();
  }, []);

  return (
    <React.Fragment>
      <BookFlightContext.Provider
        value={{
          book: book,
          setBook: setBook,
          flighData: flightData,
          setFlightData: setFlightData,
        }}
      >
        <BookingFlight />
      </BookFlightContext.Provider>
    </React.Fragment>
  );
};

export default App;
