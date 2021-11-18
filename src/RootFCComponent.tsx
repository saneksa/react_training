import { FC, memo, useCallback, useState } from "react";
import FirstComponentFC from "./FirstComponentFunc";
import SecondComponentFC from "./SecondComponentFC";

const RootComponentFC: FC = () => {
  const [countRoot, setCountRoot] = useState(0);
  const [countFirst, setCountFirst] = useState(0);
  const [countSecond, setCountSecond] = useState(0);

  const handleRootClick = () => {
    setCountRoot((prev) => prev + 1);
  };

  const handleFirstClick = () => {
    setCountFirst((prev) => prev + 1);
  };

  const handleSecondClick = () => {
    setCountSecond((prev) => prev + 1);
  };

  console.warn("render RootComponentFC");

  const keys = ["q", "w", "e"];

  return (
    <div>
      <div>
        <div>RootCount: {countRoot}</div>
        <div>
          <button onClick={handleRootClick}>SetCountRoot</button>
        </div>
      </div>
      <div>
        <FirstComponentFC
          keys={keys}
          count={countFirst}
          onClick={handleFirstClick}
        />
      </div>
      <div>
        <SecondComponentFC count={countSecond} onClick={handleSecondClick} />
      </div>
    </div>
  );
};

export default memo(RootComponentFC);
