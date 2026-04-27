import { Gamepad2 } from "lucide-react";
import Link from "next/link";
import PlatformToggle from "./PlatformToggle";
import { ReactNode } from "react";
import SubHeaderMobile from "./SubHeaderMobile";

type MenuItemType = {
  icon?: ReactNode;
  path: string;
  label: string;
};

export const headerMenuItem: MenuItemType[] = [
  {
    label: "Juegos",
    path: "/games",
    icon: <Gamepad2 className=" stroke-primary" />,
  },
  {
    label: "Inicio",
    path: "/",
  },
  {
    label: "Plataformas",
    path: "/platforms",
  },
  {
    label: "Acerca de",
    path: "/about",
  },
];

const SubHeader = () => {
  return (
    <header className="sticky top-0 grid grid-cols-1 z-1 bg-sidebar">
      <div className="w-full py-1 flex-col md:flex-row gap-4 items-center px-8 hidden md:flex mt-2 mb-3">
        <PlatformToggle />
        <section className="flex flex-col md:flex-row gap-4 md:gap-10 items-center">
          {headerMenuItem.map((item) => (
            <Link
              key={item.label}
              href={item.path}
              className="text-md font-bold text-foreground hover:text-accent transition duration-300 flex gap-2"
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </section>
      </div>
      <SubHeaderMobile menuItems={headerMenuItem} />
      <hr className="invisible md:visible w-full border-border" />
    </header>
  );
};

export default SubHeader;
