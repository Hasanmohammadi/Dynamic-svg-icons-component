import { render } from "react-dom";
import Icon from "./icon";

const App = () => (
  <div>
    <Icon name="arrowUp" />
    <Icon name="arrowDown" />
  </div>
);

render(<App />, document.getElementById("root"));
