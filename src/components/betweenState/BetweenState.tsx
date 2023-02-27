type Props = {
  state: boolean;
};

const BetweenState = ({ state }: Props) => {
  return (
    <p className="text-[50px] font-extrabold text-[green] align-middle  ">
      {state ? ":" : " "}
    </p>
  );
};

export default BetweenState;
