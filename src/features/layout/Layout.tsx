import React from "react";
import { Link } from "react-router-dom";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Link to="/" className="h-10 w-full pl-10 pt-2 top-0 bg-blue-200 fixed">
        My React Apps
      </Link>
      <div className="container mx-auto mt-10">{children}</div>
    </>
  );
};
export default Layout;
