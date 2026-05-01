import GameList from "@/components/layout/games/GameList";
import Loading from "@/components/ui/Loading";
import { Suspense } from "react";

const GamesPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <GameList />
    </Suspense>
  );
};

export default GamesPage;
