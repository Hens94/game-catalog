"use client";

import Loading from "@/components/ui/Loading";
import { GridList } from "@/common/types/game";
import MediaCard from "@/components/ui/MediaCard";

type PropType = {
  games?: GridList | null
  isLoading: boolean
}

const GameGrid: React.FC<PropType> = (props) => {
  const {games, isLoading } = props;

  if (isLoading) {
    return <Loading />;
  }

  if (games?.results?.length === 0) {
    return <div className="text-center text-2xl font-bold">No games found</div>;
  }

  return (
    <div className="m-3 md:m-10 columns-1 gap-8 md:columns-3 xl:columns-4">
      {games?.results?.map((game, index) => (
        <MediaCard 
          key={index}
          variant="game" 
          data={game}
        />
      ))}
    </div>
  );
};

export default GameGrid;
