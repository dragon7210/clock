type Props = {
  value: number;
  color: string;
};

const NumberFormat = ({ value, color }: Props) => {
  return (
    <p
      className={
        `text-[50px] font-extrabold ml-[20px] ` +
        (color === "red" ? "text-[red]" : "text-[black]")
      }
    >
      {value > 9 ? value : "0" + value}
    </p>
  );
};

export default NumberFormat;
