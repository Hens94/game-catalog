"use client";

import { cn } from "@/utils/twUtils";
import { ChevronDown, LayoutGrid } from "lucide-react";
import { useState } from "react";

const CategoryToggle = () => {
  const [isToggle, setIsToggle] = useState<boolean>(false);

  return (
    <button
      className="h-12 border-2 border-[#3BB77E] text-md font-bold text-wrap rounded-md flex items-center p-2 justify-center gap-2 text-white 
                  bg-[#3BB77E] hover:bg-[#29A56C] transition duration-300 hover:cursor-pointer"
      onClick={() => setIsToggle(!isToggle)}
    >
      <LayoutGrid className="stroke-white size-6" />
      Todas las categorias
      <ChevronDown
        className={cn("transition-all duration-500", {
          "stroke-white size-6 rotate-180": isToggle,
          "stroke-white size-6": !isToggle,
        })}
      />
    </button>
  );
};

export default CategoryToggle;
