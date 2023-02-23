import { useEffect, useState, useRef } from "react";
import ClockType from "../clockType";

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
    setMin(Math.floor(count / 60));
    setHour(Math.floor(count / 3600));
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

  return (
    <div>
      <div className="flex justify-center mt-5">
        <input
          className="border-[2px] rounded-lg mr-2 px-4"
          onChange={(e) => onChange(e)}
          type="number"
        />
        {startStatus ? (
          <button className="bg-[blue] rounded-lg px-6 py-2" onClick={start}>
            <p className="text-white font-bold">Stop</p>
          </button>
        ) : (
          <button className="bg-[red] rounded-lg px-6 py-2" onClick={start}>
            <p className="text-white font-bold">Start</p>
          </button>
        )}
      </div>

      <div className="flex justify-center">
        <ClockType value={hour} />
        <ClockType value={min} />
        <ClockType value={sec} />
        {startStatus && remain !== 0 && <ClockType value={remain} />}
      </div>
    </div>
  );
};

export default Home;
