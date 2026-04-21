import { API_ENDPOINTS } from "@/common/apiConstants";
import { GameInfo } from "@/common/types/game";
import { axiosClient } from "@/libs/axiosClient";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const useGameByID = (gameId: number) => {
  const [gameByID, setGameByID] = useState<GameInfo | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getGames = async () => {
    try {
      setIsLoading(true);
      const response = await axiosClient.get<GameInfo>(API_ENDPOINTS.GET_GAMES_BY_ID(gameId));

      if (response.status !== 200) {
        toast.error("Failed to fetch games");
        return;
      }

      setGameByID(response.data);
      console.log(response.data);
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

  return { gameByID, isLoading };
};

export default useGameByID;
