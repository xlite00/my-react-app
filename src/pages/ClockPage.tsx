import React, { useEffect, useState } from "react";
import Clock from "../features/clock/Clock";
import dayjs from "dayjs";

export type Props = {};

const ClockPage: React.FC<Props> = (props) => {
  const [clockInfo, setClockInfo] = useState({
    hour: 0,
    minute: 0,
    second: 0,
  });
  useEffect(() => {
    const callback = () => {
      let dt = dayjs();
      setClockInfo({
        hour: dt.hour(),
        minute: dt.minute(),
        second: dt.second(),
      });
    };
    const timer = setInterval(callback, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <Clock {...clockInfo} />;
};
export default ClockPage;
