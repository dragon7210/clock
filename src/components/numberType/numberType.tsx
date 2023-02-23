type Props = {
  value: number;
};

const ClockType = ({ value }: Props) => {
  return (
    <p className="text-[40px] text-[green] font-extrabold ml-[20px]">
      {value > 9 ? value : "0" + value}
    </p>
  );
};

export default ClockType;
