import GameInfo from "@/components/layout/games/GameInfo";
import Loading from "@/components/ui/Loading";
import { Suspense } from "react";

type GamePageProps = {
  params: Promise<{
    id: number;
  }>;
};

const GamePage = async ({ params }: GamePageProps) => {
  const { id } = await params;

  return (
    <Suspense fallback={<Loading />}>
      <GameInfo id={id}></GameInfo>
    </Suspense>
  )
}; 

export default GamePage;
