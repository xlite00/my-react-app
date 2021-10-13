import React from "react";
import { Link } from "react-router-dom";
export type Props = {
  pathes: string[];
};
const Links: React.VFC<Props> = ({ pathes }) => {
  return (
    <>
      {pathes.map((s) => (
        <div>
          <Link to={s}>{s}</Link>
        </div>
      ))}
    </>
  );
};
export default Links;
