import { useEffect, useState } from "react";

const Home = () => {
  const [time, setTime] = useState(String);
  useEffect(() => {
    setInterval(() => updateClick(), 1000);
  }, []);

  const updateClick = () => {
    setTime(new Date().toLocaleTimeString());
  };
  return <div>{time}</div>;
};

export default Home;
