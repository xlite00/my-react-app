import React from "react";
import Links from "../features/links/Links";
import { routes } from "../MyRoutes";

const Top: React.VFC = () => {
  const pathes = routes
    .map((r) => (typeof r.path === "string" ? r.path : ""))
    .filter((s) => s !== "" && s !== "/");
  return (
    <>
      <p>メニュー</p>
      <div className="pl-5">
        <Links pathes={pathes} />
      </div>
    </>
  );
};
export default Top;
