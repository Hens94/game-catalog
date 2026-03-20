type GamePageProps = {
  params: Promise<{
    id: string;
  }>;
};

const GamePage = async ({ params }: GamePageProps) => {
  const { id } = await params;

  return <div>GamePage {id}</div>;
}; 

export default GamePage;
