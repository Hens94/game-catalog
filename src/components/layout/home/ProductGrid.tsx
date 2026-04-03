"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import useGames from "@/hooks/useGames";
import Loading from "@/components/ui/Loading";
import { GameList } from "@/common/types/game";

type PropType = {
  games: GameList | null,
  isLoading: boolean
}

const ProductGrid: React.FC<PropType> = (props) => {
  const {games, isLoading } = props;

  if (isLoading) {
    return <Loading />;
  }

  if (games?.results?.length === 0) {
    return <div className="text-center text-2xl font-bold">No games found</div>;
  }

  return (
    <>
      <p className="pl-8 text-3xl font-bold">Lanzamientos populares</p>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-y-10 md:mx-10 py-4 ml-3">
        {games?.results?.map((item) => (
          <Link href={`/games/${item.id}`} key={item.id}>
            <Card
              className="relative border-0 items-center justify-start w-50 md:w-62  
                        h-106 md:h-auto md:min-h-110 md:max-h-122 transition duration-300 
                        md:hover:scale-105 md:hover:underline md:hover:border-1 underline-offset-4"
            >
              <div className="w-full overflow-hidden">
                <CardContent className="">
                  <Image
                    width={500}
                    height={500}
                    src={item.background_image}
                    alt={item.name}
                    className="object-fill"
                  />
                </CardContent>
                <div className="grid grid-cols-1 text-xl mx-4 my-7 gap-y-2">
                  <label className="font-bold">{item.name}</label>
                  <small>${item.rating}</small>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProductGrid;
