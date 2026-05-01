'use client'

import Loading from "@/components/ui/Loading";
import useGamesByName from "@/hooks/useGamesByName";
import { useSearchParams } from "next/navigation";
import GameGrid from "../home/GameGrid";
import { useState } from "react";


const platformsObject = [
  {id: "18", value: 'ps4', label: 'Playstation 4'},
  {id: "187", value: 'ps5', label: 'Playstation 5'},
  {id: "1", value: 'xbox-one', label: 'Xbox One'},
  {id: "186", value: 'xbox-series-sx', label: 'Xbox Series S/X'},
  {id: "7", value: 'nintendo-switch', label: 'Nintendo Switch'},
] 

const GameList = () => {
    const searchParams = useSearchParams();
    const search = searchParams.get("q");
    const platform = searchParams.get("platform")
    const [ platformName ] = useState<string>(platformsObject.find((p) => p.id === platform)?.label || "todas las plataformas");

    let platformNumber = Number(platform);
    if (Number.isNaN(platformNumber)) {
        platformNumber = 0;
    }

    const { gamesByName, isLoading } = useGamesByName(search ?? "", platformNumber);
        

    return (
        isLoading ? <Loading></Loading> :
        gamesByName?.results?.length === 0 ? <div className="text-center text-2xl font-bold">No games found</div> :

        <div className="w-full max-w-screen grid grid-cols-1">
            {platformName !== "todas las plataformas" ? <h2 className="px-10 py-2 text-3xl font-bold">Resultados de busqueda de -{search}- para -{platformName}-:</h2> : <h2 className="px-10 py-2 text-3xl font-bold">Resultados de busqueda para -{platformName}-</h2>}
            <GameGrid 
                games={gamesByName}
                isLoading={isLoading}
            />
        </div>
    );
}

export default GameList;    