
import ArrowDown from "./ArrowDown";

interface IconComponentPropsI  {
  name: string;
  size?: number;
  type?: string;
  color?: string;
};

type svgGenerator = ({ size, color }: {
  size?: number | undefined;
  color?: string | undefined;
}) => JSX.Element

interface IconTypes  { [key: string]: svgGenerator};

const icons: IconTypes = { arrowDown:  ArrowDown };

const IconComponent = ({
  name,
  size = 24,
  type = "",
  color = "black",
}: IconComponentPropsI) => {
  const Icon = icons[name + type];
  return <Icon size={size} color={color} />;
};

export default IconComponent;
