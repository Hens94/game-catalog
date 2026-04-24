"use client";

import { cn } from "@/utils/twUtils";
import { ChevronDown, LayoutGrid } from "lucide-react";
import { useState } from "react";

const categories = ["Playstation 4", "Playstation 5", "Xbox One", "Xbox Series S/X", "Nintendo Switch", "PC"];

const CategoryToggle = () => {
  const [isToggle, setIsToggle] = useState<boolean>(false);

  return (
    <>
      <button
        className="group h-12 text-md font-bold text-wrap rounded-md flex items-center p-2 justify-center gap-2 text-foreground bg-primary hover:bg-accent hover:text-accent-foreground transition duration-300 hover:cursor-pointer"
        onClick={() => setIsToggle(!isToggle)}
      >
        <LayoutGrid className="size-6 group-hover:stroke-accent-foreground transition duration-300" suppressHydrationWarning={true} />
        Todas las plataformas
        <ChevronDown
          className={cn("group-hover:stroke-accent-foreground transition-all duration-300", {
            "size-6 rotate-180": isToggle,
            "size-6": !isToggle,
          })}
        />
      </button>
      <section className={cn("hidden animate-duration-normal top-22 absolute z-1 bg-popover border-border border-1 rounded-md w-5/12 ml-2", {
        "animate-fade-in block" : isToggle,
        "animate-fade-out transition-all transition-discrete" : !isToggle
      })}>
        <div className="grid grid-cols-2 gap-4 m-8 font-bold">
          {categories.map((category,index) => (
            <button key={index} className="text-foreground border-1 border-border rounded-sm p-2 hover:border-accent hover:text-accent transition duration-300 hover:cursor-pointer">
              {category}
            </button>
          ))}
        </div>
      </section>
    </>
  );
};

export default CategoryToggle;
