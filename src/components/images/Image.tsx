import { images } from "../../utils/images";

interface ImageProps {
  src: string;
  alt: string;
}

export const Image: React.FC<ImageProps> = ({ src, alt }) => {
  return <img src={images[src]} alt={alt} />;
};
