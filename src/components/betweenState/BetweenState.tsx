type Props = {
  state: boolean;
  color: string;
};

const BetweenState = ({ state, color }: Props) => {
  return (
    <p
      className={
        `text-[50px] font-extrabold ` +
        ((color === "green" && "text-[green]") ||
          (color === "blue" && "text-[blue]") ||
          (color === "red" && "text-[red]"))
      }
    >
      {state ? ":" : " "}
    </p>
  );
};

export default BetweenState;
