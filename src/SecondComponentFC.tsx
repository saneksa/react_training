import { FC } from "react";

interface ISecondComponentProps {
  count: number;
  onClick: () => void;
}

const SecondComponentFC: FC<ISecondComponentProps> = ({
  count = 0,
  onClick
}) => {
  console.warn("render SecondComponentFC");

  return (
    <div>
      <div onClick={onClick}>FirstComponentFunc</div>
      <div>{count}</div>
    </div>
  );
};

export default SecondComponentFC;
