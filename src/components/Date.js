import React from "react";
import { useState } from "react";

const Results = () => {
  let date = new Date();
  const hour = date.getHours();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const day = days[date.getDay()];
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const year = date.getFullYear();

  const datesObj = [
    { key: "1", id: day, resume: year },
    { key: "2", id: hour, resume: "Hours" },
    { key: "3", id: minutes, resume: "Minutes" },
    { key: "4", id: seconds, resume: "Seconds" },
  ];
  //abreviations of each object date (h, d, m, s, y)
  const [h, setHour] = useState();
  const [d, setDay] = useState();
  const [m, setMinutes] = useState();
  const [s, setSeconds] = useState();
  const [y, setYear] = useState();

  setInterval(() => {
    date = new Date();
    setHour(hour);
    setDay(day);
    setMinutes(minutes);
    setSeconds(seconds);
    setYear(year);
  }, 1000);

  return datesObj.map((item) => (
    <div className="numbers" key={item.key}>
      <h1>{item.id}</h1>
      <p>{item.resume}</p>
    </div>
  ));
};

export default Results;
