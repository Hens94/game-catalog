import Image from "next/image";
import logo from "@/assets/images/logo.webp";

const MainHeader = () => {
  return (
    <header className="flex flex-col items-center">
      <div className="w-10/12 py-8 flex gap-x-4">
        <Image
          src={logo}
          className="h-14 w-auto"
          alt="logo"
          width={120}
          height={54}
        />
      </div>
      <hr className="w-full border-gray-200" />
    </header>
  );
};

export default MainHeader;
