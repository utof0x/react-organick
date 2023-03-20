import { icons } from "../../utils/icons";

interface ImageProps {
  src: string;
  alt: string;
}

export const Svg: React.FC<ImageProps> = ({ src, alt }) => {
  return <img src={icons[src]} alt={alt} />;
};
