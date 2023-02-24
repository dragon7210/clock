import { useEffect, useState, useRef } from "react";
import NumberFormat from "../numberFormat";

const Home = () => {
  const [sec, setSec] = useState<number>(0);
  const [min, setMin] = useState<number>(0);
  const [hour, setHour] = useState<number>(0);
  const [remain, setRemain] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [startStatus, setStartStatus] = useState<Boolean>(false);

  const refRemain = useRef(0);
  const refCount = useRef(0);
  refRemain.current = remain;
  refCount.current = count;

  const updateTime = () => {
    setRemain(refRemain.current - 1);
    setCount(refCount.current + 1);
  };

  useEffect(() => {
    setSec(count % 60);
    setMin(Math.floor(count / 60) % 60);
    setHour(Math.floor(count / 3600) % 24);
  }, [count]);

  const start = () => {
    startStatus ? setStartStatus(false) : setStartStatus(true);
  };
  useEffect(() => {
    if (remain >= 1 && startStatus) {
      const timer = setInterval(updateTime, 1000);
      return () => {
        clearInterval(timer);
      };
    }
    if (remain === 0) {
      setStartStatus(false);
      setCount(0);
    }
  }, [startStatus, refRemain, remain]);
  const onChange = (e: any) => {
    setRemain(e.target.value);
  };
  const refresh = () => {
    setCount(0);
    setStartStatus(false);
    setRemain(0);
  };
  return (
    <div className="w-[420px] mx-auto">
      <div className="flex justify-between mt-[150px]">
        <input
          className="border-[2px] rounded-lg px-4 focus:outline-none w-[300px]"
          onChange={(e) => onChange(e)}
          value={!startStatus ? remain : ""}
          type="number"
        />
        {startStatus ? (
          <button className="bg-[blue] rounded-lg px-8 py-4" onClick={start}>
            <p className="text-white font-bold">STOP</p>
          </button>
        ) : (
          <button className="bg-[red] rounded-lg px-8 py-4" onClick={start}>
            <p className="text-white font-bold">START</p>
          </button>
        )}
      </div>

      <div className="flex justify-between mt-5">
        <NumberFormat value={hour} color="black" />
        <NumberFormat value={min} color="black" />
        <NumberFormat value={sec} color="black" />
        <NumberFormat
          value={startStatus || remain !== 0 ? remain : 0}
          color="red"
        />
      </div>

      <div className="mt-5">
        <button
          className="bg-[#158000] w-full py-4 rounded-md text-white font-bold "
          onClick={refresh}
        >
          REFRESH
        </button>
      </div>
    </div>
  );
};

export default Home;
