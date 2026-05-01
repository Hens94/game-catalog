"use client";

import { cn } from "@/utils/twUtils";
import { ChevronDown, LayoutGrid } from "lucide-react";
import { FC, ReactNode, useState } from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTriggerWithoutChevron,
} from "@/components/ui/Accordion";

type MenuItemType = {
  icon?: ReactNode;
  path: string;
  label: string;
};

type SubHeaderMobileProps = {
  menuItems: MenuItemType[];
};

const SubHeaderMobile: FC<SubHeaderMobileProps> = ({ menuItems }) => {
  const [isToggle, setIsToggle] = useState<boolean>(false);

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full md:hidden flex bg-popover"
      onValueChange={() => setIsToggle(!isToggle)}
      value={isToggle ? "item-1" : ""}
    >
      <AccordionItem value="item-1" className="w-full">
        <AccordionTriggerWithoutChevron asChild>
          <button
            className="w-full text-md font-bold text-wrap rounded-md flex items-center justify-center gap-2 text-foreground"
          >
            <LayoutGrid className="stroke-foregroundy size-6" />
            Menu
            <ChevronDown
              className={cn("transition-all duration-500", {
                "stroke-foreground size-6 rotate-180": isToggle,
                "stroke-foreground size-6": !isToggle,
              })}
            />
          </button>
        </AccordionTriggerWithoutChevron>
        <AccordionContent>
          <div className="grid grid-cols-1 gap-6">
            <section className="flex flex-col gap-4 items-center pt-4">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.path}
                  className="text-md font-bold text-foreground flex gap-2"
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
            </section>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default SubHeaderMobile;
