import { API_ENDPOINTS } from "@/common/apiConstants";
import { GridList } from "@/common/types/game";
import { axiosClient } from "@/libs/axiosClient";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const useGamesByName = (gameName: string, platform: number) => {
  const [gamesByName, setGamesByName] = useState<GridList | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);


  const searchParams = {
    search: gameName,
    platforms: platform === 0 ? "18,187,1,186,7" : platform,
    page_size: 20,
    search_precise: false
  }



  const getGamesByName = async () => {
    try {
      setIsLoading(true);
      const response = await axiosClient.get<GridList>(API_ENDPOINTS.GET_GAMES, {params: searchParams});

      if (response.status !== 200) {
        toast.error("Failed to fetch games");
        return;
      }

      setGamesByName(response.data);
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
    getGamesByName();
  }, [gameName, platform]);

  return { gamesByName, isLoading };
};

export default useGamesByName;
