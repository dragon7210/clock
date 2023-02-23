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
    setCount(ref.current + 1);
  };
  console.log(count);
  return (
    <div className="flex justify-center">
      <p className="text-[40px] text-[green] font-extrabold ml-[20px]">
        {count}
      </p>
    </div>
  );
};

export default Home;
