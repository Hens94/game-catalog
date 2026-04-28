"use client"

import { GridItem, GridList } from "@/common/types/game"
import Link from "next/link"
import Image from "next/image";
import { useState } from "react"
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "./card"
import { Badge } from "@/components/ui/badge"
import { Star } from 'lucide-react';

type PropType = {
    variant: "game" | "platform",
    data: GridList | null | undefined
}

const platformArray: string[] = ['playstation4','playstation5','xbox-one','xbox-series-x','nintendo-switch']

const MediaCard: React.FC<PropType> = (props) => {
    const [ gameFlag ] = useState<boolean>(props.variant === "game" ? true : false);
    const { data } = props;

    const filteredPlatforms: GridItem[] | undefined = data?.results?.filter((item) => platformArray.includes(item.slug));
    

    return (
        <div className="">
            <div className="m-3 md:m-10 columns-1 gap-8 md:columns-3 xl:columns-4">
                {
                gameFlag ?
                data?.results?.map((item, index) => (
                    <Link href={`/games/${item.id}`} key={index} className="h-fit md:p-10">
                        <Card className="relative mx-auto pt-0 overflow-hidden transition duration-300 md:hover:scale-105 md:hover:border-1 ">
                            <div className="absolute inset-0 " />
                            <Image
                                width={500}
                                height={500}
                                src={item.background_image || `/${item.name}.png`}
                                alt={item.name}
                                className="relative w-full object-cover max-h-40"
                            />
                            <CardHeader>
                                <CardAction>
                                    <Badge variant="default"><Star></Star>{item.rating}</Badge>
                                </CardAction>
                            <CardTitle className="">{item.name}</CardTitle>
                            <CardDescription className="flex flex-wrap gap-1">
                                {
                                item.platforms.map(p => (
                                    platformArray.includes(p.platform.slug) ? <Badge key={p.platform.id} variant="outline" >{p.platform.name}</Badge> : <span key={p.platform.id}></span>
                                )) 
                                }
                            </CardDescription>
                            </CardHeader>
                        </Card>
                    </Link> )):

                filteredPlatforms?.map((item,index) => (
                    <Link href={`/platforms/${item.id}`} key={index} className="h-fit">
                        <Card className="relative py-0 overflow-hidden transition duration-300 md:hover:scale-105 md:hover:border-1 ">
                            <Image
                                width={500}
                                height={500}
                                src={item.image_background || `/${item.name}.png`}
                                alt={item.name}
                                className="object-cover brightness-50 mask-b-from-20% mask-b-to-90% "
                            />
                            <CardHeader className="absolute bottom-0 w-full m-2">
                                <CardTitle className="text-xl">{item.name}</CardTitle>
                                <CardDescription className="text-md">
                                    {item.games_count} Juegos
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </Link>
                ))
                }
            </div>
        </div>
    )
}

export default MediaCard;