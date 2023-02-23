import { useEffect, useState, useRef } from "react";

const Home = () => {
  const [sec, setSec] = useState<number>();
  const [min, setMin] = useState<number>();
  const [hour, setHour] = useState<number>();
  const [count, setCount] = useState<number>(0);
  const ref = useRef(0);
  ref.current = count;

  useEffect(() => {
    setInterval(updateTime, 1000);
  }, []);

  const updateTime = () => {
    setCount(ref.current + 1);
  };
  useEffect(() => {
    setSec(count % 60);
    setMin(+(count / 60).toFixed(0));
    setHour(+(count / 3600).toFixed(0));
  }, [count]);
  return (
    <div className="flex justify-center">
      <p className="text-[40px] text-[green] font-extrabold ml-[20px]">
        {hour}:{min}:{sec}
      </p>
      <p className="text-[40px] text-[green] font-extrabold ml-[20px]">
        {count}
      </p>
    </div>
  );
};

export default Home;
