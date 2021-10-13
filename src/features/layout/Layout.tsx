import React from "react";

const Layout: React.FC = ({ children }) => {
  return <>
  <div className="h-10 w-full pl-10 pt-2 top-0 bg-blue-200 fixed">My React Apps</div>
  <div className="container mx-auto mt-10">{children}</div>
  </>;
};
export default Layout;
