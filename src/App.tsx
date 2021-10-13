import React from "react";
import "./App.css";
import MyRoutes from "./MyRoutes";
import Layout from "./features/layout/Layout";
import { BrowserRouter } from "react-router-dom";

const App: React.VFC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <MyRoutes />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
