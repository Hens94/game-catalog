"use client"

import { GridItem } from "@/common/types/game"
import Link from "next/link"
import Image from "next/image";
import { FC, useState } from "react"
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "../../ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from 'lucide-react';
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/twUtils";

const platformArray: string[] = ['playstation4','playstation5','xbox-one','xbox-series-x','nintendo-switch']

const cardVariants = cva("group relative mx-auto pt-0 overflow-hidden transition duration-300 md:hover:scale-105 md:hover:border-1",{
    variants: {
        variant: {
            game: "",
            platform: "h-30 md:h-80 self-auto"
        }
    },
    defaultVariants: {
        variant: "game"
    }
})

interface CardProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof cardVariants> {
    data: GridItem
}

const MediaCard: FC<CardProps> = ({ className, data, variant,...props }) => {
    const [ gameFlag ] = useState<boolean>(variant === "game" ? true : false);

    return (

        <Link href={gameFlag ? `/games/${data.id}` : `/games?q=""&platform=${data.id}`} className="h-fit p-1" {...props}>
            <Card className={cn(cardVariants({variant}),className)}> 
                {gameFlag && <div className="absolute inset-0 " />}
                <Image 
                    width={500}
                    height={500}
                    src={gameFlag ? data.background_image || `/${data.name}.png` : data.image_background}
                    alt={data.name}
                    className={gameFlag ? "relative w-full object-cover max-h-40" : "object-cover w-full brightness-20 md:brightness-50 mask-y-from-90% to-90% "}
                />
                <CardHeader className={gameFlag ? "gap-y-2" : "absolute bottom-0 w-full m-2"}>
                    {gameFlag && <CardAction>
                        <Badge variant="default" className="group-hover:bg-accent group-hover:text-accent-foreground transition duration-300"><Star className="group-hover:stroke-accent-foreground transition duration-300"></Star>{data.rating}</Badge>
                    </CardAction> }
                    <CardTitle className={gameFlag ? "group-hover:underline" : "group-hover:underline text-xl"}>{data.name}</CardTitle>
                    <CardDescription className={gameFlag ? "flex flex-wrap gap-1" : "group-hover:underline text-md"}>
                        {gameFlag ? 
                        data.platforms.map((p) => (
                            platformArray.includes(p.platform.slug) && <Badge key={p.platform.id} variant="outline" >{p.platform.name}</Badge>
                        ))
                        : `${data.games_count} Juegos` }
                    </CardDescription>
                </CardHeader>
            </Card>
            
        </Link>
        )
    
    
}

export default MediaCard;