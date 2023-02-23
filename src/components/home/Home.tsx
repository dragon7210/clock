import { useEffect, useState } from "react";

const Home = () => {
  const [time, setTime] = useState(String);
  useEffect(() => {
    setInterval(() => updateClick(), 1000);
  }, []);

  const updateClick = () => {
    setTime(new Date().toLocaleTimeString());
  };
  return (
    <div>
      <p className="text-[40px]">{time}</p>
    </div>
  );
};

export default Home;
