import { useEffect, useState } from "react";

type Props = {
  value: number;
};

const TotalNumberFormat = ({ value }: Props) => {
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
    <div className="text-[50px] font-extrabold">
      <span className="text-[blue]">TOTAL</span>{" "}
      <span className="text-[black]">:</span>{" "}
      <span className="text-[red] w-[180px] inline-block ">{formatValue}s</span>
    </div>
  );
};

export default TotalNumberFormat;
