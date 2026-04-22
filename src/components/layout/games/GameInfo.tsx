"use client"

import { Button } from "@/components/ui/Button"
import Loading from "@/components/ui/Loading"
import useGameByID from "@/hooks/useGamesByID"
import useScreenshots from '@/hooks/useScreenshots'
import Image from 'next/image'
import { Dialog } from "radix-ui";


type PropType = {
    id: number
}

const platformArray: string[] = ['PlayStation 4','PlayStation 5','Xbox One','Xbox Series S/X','Nintendo Switch']

const GameInfo = ({id} : PropType) => {
    const { gameByID, isLoading } = useGameByID(id);
    const { screenshots } = useScreenshots(id);

    return (
        isLoading ? <Loading></Loading> :
        gameByID === null ? <div className="text-center text-2xl font-bold">No games found</div> :

        <>
            <div className="max-w-screen w-full -z-1 absolute">
                <Image 
                    width={500}
                    height={500}
                    quality={100}
                    unoptimized= {true}
                    src={gameByID?.background_image}    
                    alt={gameByID?.slug}
                    className="w-full object-cover h-full max-h-screen brightness-30 mask-y-from-90% to-90%"
                />
            </div>

            <div className="grid grid-cols-2 md:flex md:items-center gap-4">
                <section className="md:flex md:w-3/4 md:flex-col px-8 gap-y-4 pt-30">
                    <h1 className="text-8xl">{gameByID?.name}</h1>
                    <div className="flex flex-wrap gap-2 ">
                        {gameByID?.platforms.map((p,index) => (
                            platformArray.includes(p.platform.name) && <span key={index} className="border-1 border-foreground rounded-md w-fit p-1">{p.platform.name}</span>
                        ))}
                    </div>
                    <p className="my-10">{gameByID?.description_raw}</p>
                    <h2>Disponible para compra en:</h2>
                    <div className="flex flex-wrap gap-4">
                        {gameByID?.stores.map((store,index) => (
                            <a key={index} href={`https://${store.store.domain}`} target="_blank" rel="noopener noreferrer" >
                                <Button variant={"default"} className="hover:bg-accent hover:text-accent-foreground transition duration-300">{store.store.name}</Button>
                            </a>
                            
                        ))}
                    </div>
                </section>
                <aside className="w-1/4 p-4 h-fit">
                    <h2 className="text-2xl">Generos:</h2>
                    <div className="flex flex-wrap gap-2 my-3">
                        {gameByID?.genres.map((genre, index) => (
                            <span key={index} className="border-1 border-foreground rounded-md w-fit p-1">{genre.name}</span>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        {screenshots?.results.map((screenshot,index) => (
                        <Dialog.Root key={index}>
                            <Dialog.Trigger>
                                <Image
                                    width={500}
                                    height={500}
                                    quality={100}
                                    unoptimized= {true}
                                    src={screenshot.image}
                                    alt={gameByID?.slug}
                                    key={index}
                                />
                            </Dialog.Trigger>
<Dialog.Portal>
                                <Dialog.Overlay className="fixed inset-0 bg-black/80 z-2" />
                                <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md p-[25px] shadow-[var(--shadow-6)] focus:outline-none z-50">
                                    <Dialog.Title className="hidden">{gameByID?.name}</Dialog.Title>
                                    <Image
                                    width={500}
                                    height={500}
                                    quality={100}
                                    unoptimized= {true}
                                    src={screenshot.image}
                                    alt={gameByID?.slug}
                                    key={index}
                                    />
                                </Dialog.Content>
                            </Dialog.Portal>
                        </Dialog.Root>
                        ))}
                    </div>
                    
                </aside>
            </div>

            
            
        </>
    )
}

export default GameInfo;