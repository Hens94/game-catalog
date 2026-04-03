import { API_ENDPOINTS } from "@/common/apiConstants";
import { GameList } from "@/common/types/game";
import { axiosClient } from "@/libs/axiosClient";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const useGames = (gameId?: string, pageSize?: number) => {
  const [games, setGames] = useState<GameList | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const searchParams = gameId === undefined ? 
    {page_size: pageSize === undefined ? 10 : pageSize} :
    {search: gameId, page_size: pageSize === undefined ? 10 : pageSize}

  const getGames = async () => {
    try {
      setIsLoading(true);
      const response = await axiosClient.get<GameList>(API_ENDPOINTS.GET_GAMES, {params: searchParams});

      if (response.status !== 200) {
        toast.error("Failed to fetch games");
        return;
      }

      setGames(response.data);
      console.log(response.data)
    } catch (error) {
      toast.error("Failed to fetch games", {
        description: error instanceof Error ? error.message : "Unknown error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getGames();
  }, []);

  return { games, isLoading };
};

export default useGames;
