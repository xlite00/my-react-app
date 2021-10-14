import React from "react";

export type Props = {
  hour: number;
  minute: number;
  second: number;
};

const Clock: React.FC<Props> = (props) => {
  return (
    <>
      <div>
        {props.hour} : {props.minute} : {props.second}
      </div>
    </>
  );
};
export default Clock;
