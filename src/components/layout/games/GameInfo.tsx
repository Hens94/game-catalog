"use client"

import { Button } from "@/components/ui/Button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import Loading from "@/components/ui/Loading"
import useGameByID from "@/hooks/useGamesByID"
import useScreenshots from '@/hooks/useScreenshots'
import Image from 'next/image'
import Link from "next/link"
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
                    className="w-full object-cover h-full max-h-screen brightness-50 md:brightness-20 mask-y-from-90% to-90%"
                />
            </div>

            <div className="grid grid-cols-1 md:flex md:items-center gap-4">
                <section className="flex md:w-3/4 flex-col px-6 gap-y-4 pt-35 md:pt-30 animate-fade-in-up md:animate-fade-in-right md:delay-300">
                    <h1 className="text-3xl text-center md:text-start md:text-8xl">{gameByID?.name}</h1>
                    <div className="flex flex-wrap gap-x-4 gap-y-6">
                        {gameByID?.platforms.map((p,index) => (
                            platformArray.includes(p.platform.name) && <Link key={index} href="/"><span  className="text-sm md:text-md border-1 border-foreground rounded-md w-fit p-2 hover:text-accent hover:border-accent transition duration-300">{p.platform.name}</span></Link>
                        ))}
                    </div>
                    <p className="hidden md:block my-10 text-md ">{gameByID?.description_raw}</p>
                    <Collapsible className="md:hidden grid gap-4 my-7">
                        <CollapsibleTrigger className="border-2 border-border rounded-md bg-card p-2">
                            <span>Leer Descripcion</span>
                        </CollapsibleTrigger>
                        <CollapsibleContent>{gameByID?.description_raw}</CollapsibleContent>
                    </Collapsible>
                    <h2>Disponible para compra en:</h2>
                    <div className="flex flex-wrap gap-4">
                        {gameByID?.stores.map((store,index) => (
                            <a key={index} href={`https://${store.store.domain}`} target="_blank" rel="noopener noreferrer" >
                                <Button variant={"default"} className="hover:bg-accent hover:text-accent-foreground transition duration-300">{store.store.name}</Button>
                            </a>
                            
                        ))}
                    </div>
                </section>
                <aside className="md:w-1/4 p-4 h-fit md:border-1 m-4 md:border-border md:bg-card/50 md:rounded-2xl animate-fade-in-up md:animate-fade-in-left md:delay-300">
                    <h2 className="md:text-2xl">Generos:</h2>
                    <div className="flex flex-wrap gap-2 my-3">
                        {gameByID?.genres.map((genre, index) => (
                            <span key={index} className="text-sm md:text-md border-1 border-foreground rounded-md w-fit p-1">{genre.name}</span>
                        ))}
                    </div>
                    <h2 className="md:text-2xl my-4">Screenshots:</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4">
                        {screenshots?.results.map((screenshot,index) => (
                        <Dialog.Root key={index}>
                            <Dialog.Trigger className="transition duration-300 md:hover:scale-105">
                                <Image
                                    width={500}
                                    height={500}
                                    quality={100}
                                    unoptimized= {true}
                                    src={screenshot.image}
                                    alt={gameByID?.slug}
                                    key={index}
                                    className="rounded-xl md:rounded-md"
                                />
                            </Dialog.Trigger>
                            <Dialog.Portal>
                                <Dialog.Overlay className="fixed inset-0 bg-black/80 z-2" />
                                <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[90vh] w-full md:w-[90vw] max-w-screen md:max-w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-md p-[25px] shadow-[var(--shadow-6)] focus:outline-none z-50">
                                    <Dialog.Title className="hidden">{gameByID?.name}</Dialog.Title>
                                    <Image
                                        width={120}
                                        height={800}
                                        quality={100}
                                        unoptimized= {true}
                                        src={screenshot.image}
                                        alt={gameByID?.slug}
                                        key={index}
                                        className="w-full h-auto object-cover md:object-contain"
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