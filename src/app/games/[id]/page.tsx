import GameInfo from "@/components/layout/games/GameInfo";

type GamePageProps = {
  params: Promise<{
    id: number;
  }>;
};

const GamePage = async ({ params }: GamePageProps) => {
  const { id } = await params;

  return (
    <GameInfo id={id}></GameInfo>
  )
}; 

export default GamePage;
