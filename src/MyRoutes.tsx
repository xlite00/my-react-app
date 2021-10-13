import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteProps,
} from "react-router-dom";
import { Counter } from "./features/counter/Counter";

export const routes: RouteProps[] = [{ path: "/counter", component: Counter }];

const MyRoutes: React.FC = (props) => {
  return (
    <Router>
      <Switch>
        {routes.map((r) => (
          <Route exact {...r} />
        ))}
      </Switch>
    </Router>
  );
};
export default MyRoutes;
