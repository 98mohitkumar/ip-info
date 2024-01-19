"use client";

import { useEffect, useState } from "react";
import P from "./Typography/P";

const RealtimeClock = ({ timeZone }: { timeZone: string }) => {
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    const timer = setInterval(
      () => setTime(new Date().toLocaleTimeString("en-US", { timeZone })),
      1000
    );
    return () => clearInterval(timer);
  }, [timeZone]);

  return (
    <P className='font-mono' as='span' noMargin>
      {time}
    </P>
  );
};

export default RealtimeClock;
