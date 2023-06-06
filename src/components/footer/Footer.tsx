import Link from "next/link";
import Logo from "./Logo";

export const Footer = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-gray-900 p-9">
      <div>Organizado por </div>
      <Link href="https://links.lacrypta.ar" target="_blank">
        <Logo width={200} height={200} />
      </Link>
    </div>
  );
};

export default Footer;
