"use client"

import Loading from "@/components/ui/Loading"
import useGameByID from "@/hooks/useGamesByID"

type PropType = {
    id: number
}

const GameInfo = ({id} : PropType) => {
    const { gameByID, isLoading } = useGameByID(id);

    return (
        isLoading ? <Loading></Loading> :
        gameByID === null ? <div className="text-center text-2xl font-bold">No games found</div> :

        <>
            <h1>{gameByID?.name}</h1>
            <p>{gameByID?.description_raw}</p>
        </>
    )
}

export default GameInfo;