import Image from "next/image";
import logo from "@/assets/images/logo.webp";
import Link from "next/link";
import SearchInput from "./SearchInput";

const MainHeader = () => {
  return (
    <header className="grid grid-cols-1 z-2 bg-sidebar">
      <div className="w-full pt-4 flex flex-col items-center md:flex-row gap-4 px-8">
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
    </header>
  );
};

export default MainHeader;
