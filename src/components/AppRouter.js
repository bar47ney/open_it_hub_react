import { Route, Routes } from "react-router-dom";
import Main from "./Main/Main";
import Corporat from "./Corporat";
import Rent from "./Rent";
import Event from "./Event";
import EventsList from "./EventsList";
import { Component } from "react";
import { CSSTransition } from "react-transition-group";

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route path="/corporat" element={<Corporat />} />
      <Route path="/events" element={<EventsList />} />
      <Route path="/event/:id" element={<Event />} />
      <Route path="/rent" element={<Rent />} />
      <Route path="*" element={<Main />} />
    </Routes>
  );
};

export default AppRouter;
