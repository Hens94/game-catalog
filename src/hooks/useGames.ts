import { API_ENDPOINTS } from "@/common/apiConstants";
import { GameList } from "@/common/types/game";
import { axiosClient } from "@/libs/axiosClient";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const useGames = () => {
  const [games, setGames] = useState<GameList | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getGames = async () => {
    try {
      setIsLoading(true);
      const response = await axiosClient.get<GameList>(API_ENDPOINTS.GET_GAMES);
      console.log(response.data);

      if (response.status !== 200) {
        toast.error("Failed to fetch games");
        return;
      }

      setGames(response.data);
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
