import { useEffect, useState, useRef } from "react";
import NumberFormat from "../components/numberFormat";
import TotalNumberFormat from "../components/totalNumberFormat";
import { toast } from "react-toastify";

const Clock = () => {
  const [sec, setSec] = useState<number>(0);
  const [min, setMin] = useState<number>(0);
  const [hour, setHour] = useState<number>(0);
  const [remain, setRemain] = useState<number>(46800);
  const [count, setCount] = useState<number>(0);
  const [miliSec, setMiliSec] = useState<number>(0);
  const [startStatus, setStartStatus] = useState<Boolean>(false);

  const refRemain = useRef(0);
  const refCount = useRef(0);
  const refMil = useRef(0);
  refRemain.current = remain;
  refCount.current = count;
  refMil.current = miliSec;

  const updateTime = () => {
    setRemain(refRemain.current - 1);
    setCount(refCount.current + 1);
  };

  const updateMilSec = () => {
    setMiliSec((refMil.current + 1) % 100);
  };

  useEffect(() => {
    setSec(count % 60);
    setMin(Math.floor(count / 60) % 60);
    setHour(Math.floor(count / 3600) % 24);
  }, [count]);

  const start = () => {
    if (remain.toString() === "0" || !remain.toString()) {
      toast.error("Please input the value second");
    } else {
      startStatus ? setStartStatus(false) : setStartStatus(true);
    }
  };

  useEffect(() => {
    if (remain >= 1 && startStatus) {
      const timer = setInterval(updateTime, 1000);
      const milTimer = setInterval(updateMilSec, 10);
      return () => {
        clearInterval(timer);
        clearInterval(milTimer);
      };
    }
    if (remain === 0) {
      setStartStatus(false);
      setCount(0);
    }
  }, [startStatus, refRemain, remain]);

  const onChange = (e: any) => {
    if (!startStatus) {
      setRemain(e.target.value);
    }
  };

  const refresh = () => {
    setCount(0);
    setStartStatus(false);
    setRemain(0);
    setMiliSec(0);
  };

  return (
    <div className="w-[600px] mx-auto bg-[white] p-10 rounded-md">
      <div className="flex justify-between ">
        <input
          className="border-[2px] rounded-lg px-4 focus:outline-none w-[370px] text-[30px]"
          onChange={(e) => onChange(e)}
          value={!startStatus ? remain : ""}
          type="number"
        />
        {startStatus ? (
          <button className="bg-[blue] rounded-lg px-8 py-4" onClick={start}>
            <p className="text-white font-bold text-[20px]">STOP</p>
          </button>
        ) : (
          <button className="bg-[red] rounded-lg px-8 py-4" onClick={start}>
            <p className="text-white font-bold text-[20px]">START</p>
          </button>
        )}
      </div>
      <div className="flex justify-center mt-3">
        <TotalNumberFormat value={remain} />
      </div>
      <div className="flex justify-between px-10">
        <NumberFormat value={hour} color="black" />
        <NumberFormat value={min} color="black" />
        <NumberFormat value={sec} color="black" />
        <NumberFormat value={miliSec} color="blue" />
      </div>

      <div className="mt-5">
        <button
          className="bg-[#158000] w-full py-4 rounded-md text-white font-bold text-[20px]"
          onClick={refresh}
        >
          REFRESH
        </button>
      </div>
    </div>
  );
};

export default Clock;
