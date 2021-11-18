import { render } from "react-dom";
import RootFCComponent from "./RootFCComponent";

const rootElement = document.getElementById("root");
render(
  <div>
    <RootFCComponent />
  </div>,
  rootElement
);
