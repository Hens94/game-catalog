import Image from "next/image";
import logo from "@/assets/images/logo.webp";
import Link from "next/link";
import SearchInput from "./SearchInput";

const MainHeader = () => {
  return (
    <header className="flex flex-col items-center z-2">
      <div className="w-11/12 py-8 flex gap-x-4">
        <Link href="/">
          <Image
            src={logo}
            className="h-14 w-auto"
            alt="logo"
            width={120}
            height={54}
          />
        </Link>
        <SearchInput />
      </div>
      <hr className="w-full border-gray-200" />
    </header>
  );
};

export default MainHeader;
