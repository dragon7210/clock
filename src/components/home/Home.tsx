import { useEffect, useState, useRef } from "react";

const Home = () => {
  const [time, setTime] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const ref = useRef(0);
  ref.current = count;

  useEffect(() => {
    setInterval(updateTime, 1000);
  }, []);

  const updateTime = () => {
    setTime(new Date().toLocaleTimeString());
    setCount(ref.current + 1);
  };

  return (
    <div className="flex justify-center">
      <p className="text-[40px] text-[green] font-extrabold">{time}</p>
      <p className="text-[40px] text-[green] font-extrabold">{count}</p>
    </div>
  );
};

export default Home;
