## Dynamic-svg-icons-component

Using this component, you can easily use any number of svg files in your project just with one component.

## Usage/Examples

icon.tsx
```typescript
import { ReactComponent as ArrowDown } from "./arrow-down.svg";
import { ReactComponent as ArrowUp } from "./arrow-up.svg";

type IconComponentProps = { name: string };
type IconTypes = { [name: string]: ReactSVGComponent };

const iconTypes: IconTypes = { arrowDown: ArrowDown, arrowUp: ArrowUp };

const IconComponent = ({ name, ...props }: IconComponentProps) => {
  let Icon = iconTypes[name];
  return <Icon {...props} />;
};

export default IconComponent;
```

index.tsx
```typescript
import { render } from "react-dom";
import Icon from "./icon";

const App = () => (
  <div>
    <Icon name="arrowUp" />
    <Icon name="arrowDown" />
  </div>
);

render(<App />, document.getElementById("root"));
```
