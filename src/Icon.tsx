import { ReactComponent as ArrowUp } from "./arrow-up.svg";

import ArrowDown from "./ArrowDown";

type IconComponentProps = {
  name: string;
  size?: number;
  type?: string;
  color?: string;
};
type IconTypes = { [name: string]: React.Component };

const icons: IconTypes = { arrowDown: ArrowDown, arrowUp: ArrowUp };

const IconComponent = ({
  name,
  size = 24,
  type = "",
  color = "black",
}: IconComponentProps) => {
  const Icon = icons[name + type];
  return <Icon size={size} color={color} />;
};

export default IconComponent;
