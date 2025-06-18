type GamesCategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

const GamesCategoryPage = async ({ params }: GamesCategoryPageProps) => {
  const { category } = await params;

  return <div>GamesCategoryPage {category}</div>;
};

export default GamesCategoryPage;
