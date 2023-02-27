type Props = {
  state: boolean;
  color: string;
};

const BetweenState = ({ state, color }: Props) => {
  return (
    <p className="text-[50px] font-extrabold" style={{ color: color }}>
      {state ? ":" : " "}
    </p>
  );
};

export default BetweenState;
