import { FC, memo, ReactNode } from "react";

interface ISecondComponentProps {
  count: number;
  onClick: () => void;
  children: ReactNode;
}

const SecondComponentFC: FC<ISecondComponentProps> = ({
  count = 0,
  onClick,
  children,
}) => {
  console.warn("render SecondComponentFC");

  return (
    <div>
      <div onClick={onClick}>FirstComponentFunc</div>
      <div>{count}</div>
      <div>{children}</div>
    </div>
  );
};

export default memo(SecondComponentFC);
