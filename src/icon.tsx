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
