import { FC, memo, useCallback, useState } from "react";
import FirstComponentFC from "./FirstComponentFunc";
import SecondComponentFC from "./SecondComponentFC";

const RootFCComponent: FC = () => {
  const [countFirst, setCountFirst] = useState(0);
  const [countSecond, setCountSecond] = useState(0);

  const handleFirstClick = useCallback(() => {
    setCountFirst((prev) => prev + 1);
  }, []);

  const handleSecondClick = useCallback(() => {
    setCountSecond((prev) => prev + 1);
  }, []);

  return (
    <div>
      <div>
        <FirstComponentFC count={countFirst} onClick={handleFirstClick} />
      </div>
      <div>
        <SecondComponentFC count={countSecond} onClick={handleSecondClick} />
      </div>
    </div>
  );
};

export default memo(RootFCComponent);
