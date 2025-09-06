import { Gamepad2 } from "lucide-react";
import Link from "next/link";
import CategoryToggle from "./CategoryToggle";
import { ReactNode } from "react";
import SubHeaderMobile from "./SubHeaderMobile";

type MenyItemType = {
  icon?: ReactNode;
  path: string;
  label: string;
};

export const headerMenuItem: MenyItemType[] = [
  {
    label: "Juegos",
    path: "/games",
    icon: <Gamepad2 className="md:stroke-[#61B77E] stroke-white" />,
  },
  {
    label: "Inicio",
    path: "/",
  },
  {
    label: "Categorias",
    path: "/games",
  },
  {
    label: "Acerca de",
    path: "/about",
  },
];

const SubHeader = () => {
  return (
    <header className="sticky top-0 grid grid-cols-1 z-1 bg-white">
      <div className="w-full py-1 flex-col md:flex-row gap-4 items-center px-8 hidden md:flex">
        <CategoryToggle />
        <section className="flex flex-col md:flex-row gap-4 md:gap-10 items-center">
          {headerMenuItem.map((item) => (
            <Link
              key={item.label}
              href={item.path}
              className="text-md font-bold text-foreground hover:text-[#61B77E] transition duration-300 flex gap-2"
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </section>
      </div>
      <SubHeaderMobile menuItems={headerMenuItem} />
      <hr className="invisible md:visible w-full border-gray-200 mt-3" />
    </header>
  );
};

export default SubHeader;
