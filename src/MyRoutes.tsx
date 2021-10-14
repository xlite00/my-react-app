import React from "react";
import { Switch, Route, RouteProps } from "react-router-dom";
import Top from "./pages/Top";
import { Counter } from "./features/counter/Counter";
import ClockPage from "./pages/ClockPage";

export const routes: RouteProps[] = [
  { path: "/", component: Top },
  { path: "/counter", component: Counter },
  { path: "/clock", component: ClockPage },
];

const MyRoutes: React.FC = (props) => {
  return (
    <Switch>
      {routes.map((r) => (
        <Route exact {...r} />
      ))}
    </Switch>
  );
};
export default MyRoutes;
