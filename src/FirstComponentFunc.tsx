import { FC, memo } from "react";

interface IFirstComponentProps {
  count: number;
  onClick: () => void;
}

const FirstComponentFC: FC<IFirstComponentProps> = ({ count = 0, onClick }) => {
  console.warn("render FirstComponentFC");

  return (
    <div onClick={onClick}>
      <div>FirstComponentFunc</div>
      <div>{count}</div>
    </div>
  );
};

export default memo(FirstComponentFC);
