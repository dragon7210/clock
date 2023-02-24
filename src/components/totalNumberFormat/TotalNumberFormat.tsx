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
    if (value > 9999) {
      setFormatValue(value.toString());
    }
    if (10000 > value && value > 999) {
      setFormatValue("0" + value);
    }
    if (1000 > value && value > 99) {
      setFormatValue("00" + value);
    }
    if (100 > value && value > 9) {
      setFormatValue("000" + value);
    }
    if (10 > value) {
      setFormatValue("0000" + value);
    }
  };
  return (
    <div className="text-[50px] font-extrabold">
      <span className="text-[blue]">TOTAL</span>{" "}
      <span className="text-[black]">:</span>{" "}
      <span className="text-[red] w-[160px] inline-block ">{formatValue}</span>
    </div>
  );
};

export default TotalNumberFormat;
