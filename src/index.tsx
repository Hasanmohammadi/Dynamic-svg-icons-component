import { render } from "react-dom";
import Icon from "./Icon";

const App = () => (
  <div>
    <Icon name="arrowDown" size={72} color="red" />
  </div>
);

render(<App />, document.getElementById("root"));
