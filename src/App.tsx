import React from "react";
import "./App.css";
import MyRoutes from "./MyRoutes";
import Layout from "./features/layout/Layout";

const App: React.VFC = () => {
  return (
    <Layout>
      <span>Learn </span>
      <MyRoutes />
    </Layout>
  );
};

export default App;
