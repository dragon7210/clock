import { useEffect, useState, useRef } from "react";
import NumberFormat from "../components/numberFormat";
import TotalNumberFormat from "../components/totalNumberFormat";
import BetweenState from "../components/betweenState";
import { toast } from "react-toastify";

const Clock = () => {
  const [sec, setSec] = useState<number>(0);
  const [min, setMin] = useState<number>(0);
  const [hour, setHour] = useState<number>(0);
  const [remain, setRemain] = useState<number>(46800);
  const [count, setCount] = useState<number>(0);
  const [miliSec, setMiliSec] = useState<number>(0);
  const [startStatus, setStartStatus] = useState<Boolean>(false);
  const [state, setState] = useState<boolean>(true);
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
      toast.error("Please input the second value");
    } else {
      startStatus ? setStartStatus(false) : setStartStatus(true);
    }
  };

  useEffect(() => {
    if (remain >= 1 && startStatus) {
      const timer = setInterval(updateTime, 1000);
      const milTimer = setInterval(updateMilSec, 10);
      const stateTimer = setInterval(() => {
        state ? setState(false) : setState(true);
      }, 1000);

      return () => {
        clearInterval(timer);
        clearInterval(milTimer);
        clearInterval(stateTimer);
      };
    }
    if (remain === 0) {
      setStartStatus(false);
      setCount(0);
    }
  }, [startStatus, refRemain, remain, state]);

  const onChange = (e: any) => {
    if (!startStatus) {
      setRemain(e.target.value);
    } else {
      toast.warn("If you input the second value, please press the stop button");
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
        <button
          className={
            `rounded-lg px-8 py-4 ` + (startStatus ? "bg-[blue]" : "bg-[red]")
          }
          onClick={start}
        >
          <p className="text-white font-bold text-[20px]">
            {startStatus ? "STOP" : "START"}
          </p>
        </button>
      </div>
      <div className="mt-3 px-14">
        <TotalNumberFormat value={remain} state={!state} />
      </div>
      <div className="flex justify-between px-10">
        <NumberFormat value={hour} color="black" />
        <BetweenState state={state} color="blue" />
        <NumberFormat value={min} color="black" />
        <BetweenState state={state} color="blue" />
        <NumberFormat value={sec} color="black" />
        <BetweenState state={state} color="red" />
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
