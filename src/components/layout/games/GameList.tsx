'use client'

import Loading from "@/components/ui/Loading";
import useGamesByName from "@/hooks/useGamesByName";
import { useSearchParams } from "next/navigation";

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

        <>
        <h1>Busqueda: {search}</h1>
        <p>Platform: {platformNumber}</p>

        <code>{JSON.stringify(gamesByName, null, 2)}</code>
        </>
    );
}

export default GameList;    