type Props = {
  value: number;
  color: string;
};

const NumberFormat = ({ value, color }: Props) => {
  return (
    <p
      className="text-[50px] font-extrabold w-[70px] caret-transparent"
      style={{ color: color }}
    >
      {value > 9 ? value : "0" + value}
    </p>
  );
};

export default NumberFormat;
