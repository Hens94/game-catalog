"use client";

import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";import Loading from "@/components/ui/Loading";
import { GameList } from "@/common/types/game";
import { Badge } from "@/components/ui/badge"
import { Star } from 'lucide-react';

type PropType = {
  games?: GameList | null,
  isLoading: boolean
}

const platformArray: string[] = ['PlayStation 4','PlayStation 5','Xbox One','Xbox Series S/X','Nintendo Switch']


const ProductGrid: React.FC<PropType> = (props) => {
  const {games, isLoading } = props;

  if (isLoading) {
    return <Loading />;
  }

  if (games?.results?.length === 0) {
    return <div className="text-center text-2xl font-bold">No games found</div>;
  }

  return (
    <div className="">
      <div className="m-3 md:m-10 columns-1 gap-8 md:columns-3 xl:columns-4">
        {games?.results?.map((item) => (
          <Link href={`/games/${item.id}`} key={item.id} className="h-fit md:p-10">
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
                        platformArray.includes(p.platform.name) ? <Badge key={p.platform.id} variant="outline" >{p.platform.name}</Badge> : <span key={p.platform.id}></span>
                      ))
                    }
                  </CardDescription>
                </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
