import Link from "next/link";
import Image from "next/image";
import DarkModeBtn from "./DarkModeBtn";
import { SiGithub } from "react-icons/si";
import LogoImg from "@public/logo.png";

const Header = () => {
  return (
    <div className="flex items-center justify-between text-black dark:text-gray-300">
      <Link href="/">
        <div className="flex gap-1">
          <Image
            src={LogoImg}
            width={34}
            height={34}
            alt="Logo of tablify"
            className="object-contain"
          />
          <h1 className="text-xl font-semibold md:text-3xl">Tablify</h1>
        </div>
      </Link>
      <div className="flex items-center space-x-4">
        <DarkModeBtn />
        <Link
          href="https://github.com/jithesh-poojari/tablify"
          target="blank"
          className="text-black dark:text-gray-300"
        >
          <SiGithub className="w-6 h-6 text-black dark:text-gray-300" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
