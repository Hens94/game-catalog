import { API_ENDPOINTS } from "@/common/apiConstants";
import { GameList } from "@/common/types/game";
import { axiosClient } from "@/libs/axiosClient";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const useGamesByName = (gameName: string, platform: number, pageSize?: number) => {
  const [gamesByName, setGamesByName] = useState<GameList | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  

  const searchParams = platform === 0 ? 
    {search: gameName, platforms: "18,187,1,186,7,4", page_size: pageSize === undefined ? 10 : pageSize} : 
    {search: gameName, platforms: platform, page_size: pageSize === undefined? 10 : pageSize};


  const getGamesByName = async () => {
    try {
      setIsLoading(true);
      const response = await axiosClient.get<GameList>(API_ENDPOINTS.GET_GAMES, {params: searchParams});

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
  }, [gameName]);

  return { gamesByName, isLoading };
};

export default useGamesByName;
