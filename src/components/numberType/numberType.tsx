type Props = {
  value: number;
  color: string;
};

const ClockType = ({ value, color }: Props) => {
  return (
    <p className={`text-[40px] text-[${color}] font-extrabold ml-[20px]`}>
      {value > 9 ? value : "0" + value}
    </p>
  );
};

export default ClockType;
