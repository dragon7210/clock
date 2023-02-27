import { useEffect, useState } from "react";
import BetweenState from "../betweenState";

type Props = {
  value: number;
  state: boolean;
};

const TotalNumberFormat = ({ value, state }: Props) => {
  const [formatValue, setFormatValue] = useState<string>("");
  useEffect(() => {
    Format(value);
  }, [value]);
  const Format = (value: number) => {
    let newFormatValue = "";
    switch (true) {
      case value > 9999:
        newFormatValue = value.toString();
        break;
      case 10000 > value && value > 999:
        newFormatValue = "0" + value;
        break;
      case 1000 > value && value > 99:
        newFormatValue = "00" + value;
        break;
      case 100 > value && value > 9:
        newFormatValue = "000" + value;
        break;
      case 10 > value:
        newFormatValue = "0000" + value;
        break;
      default:
    }
    setFormatValue(newFormatValue);
  };
  return (
    <div className="text-[50px] font-extrabold flex justify-between">
      <p className="text-[blue]">TOTAL</p>
      <BetweenState state={state} color="green" />
      <p className="text-[red] w-[180px] ">{formatValue}s</p>
    </div>
  );
};

export default TotalNumberFormat;
