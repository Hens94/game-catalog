import { Gamepad2 } from "lucide-react";
import Link from "next/link";
import CategoryToggle from "./CategoryToggle";
import { ReactNode } from "react";

type MenyItemType = {
  icon?: ReactNode;
  path: string;
  label: string;
};

const headerMenuItem: MenyItemType[] = [
  {
    label: "Juegos",
    path: "/games",
    icon: <Gamepad2 className="stroke-[#61B77E] " />,
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
    <header className="sticky top-0 items-center flex flex-col z-1">
      <div className="w-11/12 py-1 flex gap-x-4 items-center ">
        <CategoryToggle />
        <section className="flex flex-row gap-10 ml-4">
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
      <hr className="w-full border-gray-200 mt-3" />
    </header>
  );
};

export default SubHeader;
