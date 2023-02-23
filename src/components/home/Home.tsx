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
    <div className="flex justify-center">
      <p className="text-[40px] text-[green] font-extrabold">{time}</p>
    </div>
  );
};

export default Home;
