"use client"

import Loading from "@/components/ui/Loading"
import useGameByID from "@/hooks/useGamesByID"
import { useState } from "react"

type PropType = {
    id: number
}

const GameInfo = ({id} : PropType) => {
    const [gameID, setGameID] = useState<number>(id)
    const { gameByID, isLoading } = useGameByID(gameID);

    return (
        isLoading ? <Loading></Loading> :
        gameByID === null || undefined ? <div className="text-center text-2xl font-bold">No games found</div> :

        <>
            <h1>{gameByID?.name}</h1>
            <p>{gameByID?.description_raw}</p>
        </>
    )
}

export default GameInfo;