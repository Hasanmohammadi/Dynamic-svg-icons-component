import { render } from "react-dom";
import Icon from "./Icon";

const App = () => (
  <div>
    <Icon name="arrowDown" size={72} color="#220066" />
  </div>
);

render(<App />, document.getElementById("root"));
