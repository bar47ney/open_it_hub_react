import { Route, Routes } from "react-router-dom";
import Corporat from "./Corporat";
import Event from "./Event";
import EventsList from "./EventsList";
import Main from "./Main/Main";
import Rent from "./Rent";

import { useSpring, animated } from "react-spring";

const AppRouter = () => {
  const routes = [
    // {
    //   path: "/",
    //   Component: Main,
    // },
    {
      path: "/corporat",
      Component: Corporat,
    },
    {
      path: "/rent",
      Component: Rent,
    },
  ];

  {
    // <animated.div style={props}>
    // </animated.div>
    // /* <Route exact path="/" element={<Main />} />
    //     <Route path="/corporat" element={<Corporat />} />
    //     <Route path="/events" element={<EventsList />} />
    //     <Route path="/event/:id" element={<Event />} />
    //     <Route path="/rent" element={<Rent />} />
    //     <Route path="*" element={<Main />} /> */
  }

  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  return (
    <Routes>
      {/* {routes.map(({ path, Component }) => {
        <Route key={path} path={path} element={Component} />;
      })} */}
      <Route exact path="/" element={<Main />} />
      <Route path="/corporat" element={<Corporat />} />
      <Route path="/events" element={<EventsList />} />
      <Route path="/event/:id" element={<Event />} />
      <Route path="/rent" element={<Rent />} />
      <Route path="*" element={<Main />} /> */
    </Routes>
  );
};

export default AppRouter;
