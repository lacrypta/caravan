import Link from "next/link";
import Logo from "./Logo";
import logoONG from "../../../public/images/logo-ong.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="flex w-full flex-row items-center justify-center space-x-8 bg-gray-950 p-9">
      <Link href="https://links.lacrypta.ar" target="_blank">
        <Logo width={150} height={150} />
      </Link>
    </div>
  );
};

export default Footer;
