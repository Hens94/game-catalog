'use client'

import Loading from "@/components/ui/Loading";
import useGamesByName from "@/hooks/useGamesByName";
import { useSearchParams } from "next/navigation";
import GameGrid from "../home/GameGrid";

const GameList = () => {
    const searchParams = useSearchParams();
    const search = searchParams.get("q");
    const platform = searchParams.get("platform")

    let platformNumber = Number(platform);
    if (Number.isNaN(platformNumber)) {
        platformNumber = 0;
    }

    const { gamesByName, isLoading } = useGamesByName(search ?? "", platformNumber);

    return (
        isLoading ? <Loading></Loading> :
        gamesByName?.results?.length === 0 ? <div className="text-center text-2xl font-bold">No games found</div> :

        <div className="w-full max-w-screen grid grid-cols-1">
            <h2 className="px-10 py-2 text-3xl font-bold">Resultados de busqueda{search === "" ? ` para -${search}-:` : ":"}</h2>
            <GameGrid 
                games={gamesByName}
                isLoading={isLoading}
            />
        </div>
    );
}

export default GameList;    