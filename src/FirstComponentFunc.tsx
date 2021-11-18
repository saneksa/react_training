import { FC, memo } from "react";

interface IFirstComponentProps {
  count: number;
  onClick: () => void;
  keys: string[];
}

const FirstComponentFC: FC<IFirstComponentProps> = ({
  count = 0,
  onClick,
  keys,
}) => {
  console.warn("render FirstComponentFC");

  return (
    <div onClick={onClick}>
      <div>{keys?.join(", ")}</div>
      <div>FirstComponentFunc</div>
      <div>{count}</div>
    </div>
  );
};

export default memo(FirstComponentFC);
