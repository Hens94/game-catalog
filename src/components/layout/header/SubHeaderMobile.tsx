"use client";

import { cn } from "@/utils/twUtils";
import { ChevronDown, LayoutGrid } from "lucide-react";
import { FC, ReactNode, useState } from "react";
import CategoryToggle from "./CategoryToggle";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTriggerWithoutChevron,
} from "@/components/ui/Accordion";

type MenyItemType = {
  icon?: ReactNode;
  path: string;
  label: string;
};

type SubHeaderMobileProps = {
  menuItems: MenyItemType[];
};

const SubHeaderMobile: FC<SubHeaderMobileProps> = ({ menuItems }) => {
  const [isToggle, setIsToggle] = useState<boolean>(false);

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full md:hidden flex bg-[#3BB77E]"
      onValueChange={() => setIsToggle(!isToggle)}
      value={isToggle ? "item-1" : ""}
    >
      <AccordionItem value="item-1" className="w-full">
        <AccordionTriggerWithoutChevron>
          <button
            className="w-full h-12 text-md font-bold text-wrap rounded-md flex items-center p-2 justify-center gap-2 text-white 
                  hover:bg-[#29A56C] transition duration-300 hover:cursor-pointer"
          >
            <LayoutGrid className="stroke-white size-6" />
            Submenu
            <ChevronDown
              className={cn("transition-all duration-500", {
                "stroke-white size-6 rotate-180": isToggle,
                "stroke-white size-6": !isToggle,
              })}
            />
          </button>
        </AccordionTriggerWithoutChevron>
        <AccordionContent>
          <div className="grid grid-cols-1 gap-4">
            <CategoryToggle />
            <section className="flex flex-col gap-4 items-center">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.path}
                  className="text-md font-bold text-white transition duration-300 flex gap-2"
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
