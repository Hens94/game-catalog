"use client"

import Image from "next/image";
import logo from "@/assets/images/logo.webp";
import Form from 'next/form'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { ChevronDown, Search } from "lucide-react";
import { useState } from "react";
import Link from "next/link"


const MainHeader = () => {
  const [ input, setInput ] = useState<string>("");
  const [ category, setCategory ] = useState<string>("Categoria");
  // const [ categoryInput, setCategoryInput ] = useState<string>("")

  function handleSubmit(): void {

  }

  return (
    <header className="flex flex-col items-center z-2">
      <div className="w-11/12 py-8 flex gap-x-4">
        <Link href="/">
          <Image
          src={logo}
          className="h-14 w-auto"
          alt="logo"
          width={120}
          height={54}
        />
        </Link>
        <Form action={handleSubmit} className="flex items-center ml-8 w-7/12 border-2 border-light-green rounded-sm h-14">
          <div className="flex items-center h-full border-light-green px-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center justify-between w-full text-sm font-bold  m-1 min-w-[120px] hover:cursor-pointer">
                <span className="flex-1 text-left">{category}</span>
                <ChevronDown className="stroke-gray-400"/>
              </DropdownMenuTrigger>
              <span className="border-l border-b-gray-400 h-8 ml-2" ></span>
              <DropdownMenuContent className="h-10 w-50 font-muted-foreground">
                <div className="border-2 border-gray rounded-md bg-white">
                  {/* <input 
                    type="text"
                    className="border-[#BCE3C9] border-2 rounded-sm m-2 w-34 h-8"
                    value={categoryInput}
                    onSubmit={() => {}}
                    onChange={(e) => setCategoryInput(e.target.value)}
                    onClick={(e) => e.stopPropagation}
                    id="categoryInput"
                  ></input> */}
                  {/* No encuentro una manera de crear un data list con este input y los menu items del dropdown.
                  Encotre este paquete de npm que parece ser justo lo que quiero, pero al instalarlo dice que la version es vieja y puede causar problema de compatibilidad:
                  https://github.com/andrelandgraf/react-datalist-input.git */}
                  <DropdownMenuItem className="menu-item" onClick={() => setCategory("Categorias")} >Todas las categorias</DropdownMenuItem>
                  <DropdownMenuItem className="menu-item" onClick={() => setCategory("PS4")} >PS4</DropdownMenuItem>
                  <DropdownMenuItem className="menu-item" onClick={() => setCategory("PS5")}>PS5</DropdownMenuItem>
                  <DropdownMenuItem className="menu-item" onClick={() => setCategory("Xbox One")}>Xbox One</DropdownMenuItem>
                  <DropdownMenuItem className="menu-item" onClick={() => setCategory("Xbox Series")}>Xbox Series</DropdownMenuItem>
                  <DropdownMenuItem className="menu-item" onClick={() => setCategory("Switch")}>Switch</DropdownMenuItem>
                </div>  
              </DropdownMenuContent>
          </DropdownMenu>
          </div>
          <div className="flex items-center h-full flex-1 relative">
            <input 
              type="text" 
              placeholder="Buscar por juegos" 
              className="w-full h-full outline-none px-4 text-sm" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              id="searchInput"
            ></input>
            <Search className="flex justify-end mr-6 stroke-gray-400"/>
          </div>
          
      </Form>
      </div>
      <hr className="w-full border-gray-200" />
    </header>
  );
};

export default MainHeader;
