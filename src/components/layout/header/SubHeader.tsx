"use client"

import { ChevronDown, Gamepad2, LayoutGrid } from "lucide-react";
import Link from "next/link"
import { useState } from "react";

const headerStyle: string = "text-md font-bold text-foreground hover:text-[#61B77E] transition duration-300"

const SubHeader = () => {
  const [ isToggle, setIsToggle ] = useState<boolean>(false)
  
  
  const toggleSvg = () => {
    setIsToggle(!isToggle)
  }

  const svgStyle: string = isToggle ? "stroke-white size-6 rotate-180" : "stroke-white size-6"


  return (
    <header className="sticky top-0 items-center flex flex-col z-1">
      <div className="w-11/12 py-1 flex gap-x-4 items-center ">
        <button 
          className="h-12 border-2 border-[#3BB77E] text-md font-bold text-wrap rounded-md flex items-center p-2 justify-center gap-2 text-white 
                  bg-[#3BB77E] hover:bg-[#29A56C] transition duration-300 hover:cursor-pointer"
          onClick={toggleSvg}
        >
          <LayoutGrid className="stroke-white size-6"/>Todas las categorias<ChevronDown className={svgStyle}/>
        </button>
        <section className="flex flex-row gap-10 ml-4">
          <Link href="/games" className={`${headerStyle} flex gap-2`}>
            <Gamepad2 className="stroke-[#61B77E] "/>Juegos</Link>
          <Link href="/" className={headerStyle}>Inicio</Link>
          {/* pendiente: leer documentacion de la api para llamar las categorias */}
          <Link href="/games" className={headerStyle}>Categorias</Link> 
          <Link href="/about" className={headerStyle}>Acerca de</Link>

        </section>
      </div>
      <hr className="w-full border-gray-200 mt-3" />
    </header>
  );
};

export default SubHeader;
