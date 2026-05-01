"use client";

import { cn } from "@/utils/twUtils";
import { ChevronDown, LayoutGrid } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const platformsObject = [
  {id: 0, value: "todos", label: "Todos"},
  {id: 18, value: 'ps4', label: 'Playstation 4'},
  {id: 187, value: 'ps5', label: 'Playstation 5'},
  {id: 1, value: 'xbox-one', label: 'Xbox One'},
  {id: 186, value: 'xbox-series-sx', label: 'Xbox Series S/X'},
  {id: 7, value: 'nintendo-switch', label: 'Nintendo Switch'},
] as const

const PlatformToggle = () => {
  const [isToggle, setIsToggle] = useState<boolean>(false);
  const router = useRouter();

  const onClick = (platformID: number) => {
    router.push(platformID === 0 ? `/games` : `/games?q=""&platform=${platformID}`);
    setIsToggle(!isToggle);
  };

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
          {platformsObject.map((platform,index) => (
            <button key={index} onClick={() => onClick(platform.id)} className="text-foreground border-1 border-border rounded-sm p-2 hover:border-accent hover:text-accent transition duration-300 hover:cursor-pointer">
              {platform.label}
            </button>
          ))}
        </div>
      </section>
    </>
  );
};

export default PlatformToggle;
