import Image, { type StaticImageData } from "next/image";
import logoSrc from "../../public/images/logo.svg";

interface LogoProps {
  width: number;
  height: number;
}

export const Logo = ({ width, height }: LogoProps) => {
  return (
    <Image
      src={logoSrc as StaticImageData}
      alt="La Crypta"
      width={width}
      height={height}
    />
  );
};

export default Logo;
