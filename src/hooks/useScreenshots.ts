import { API_ENDPOINTS } from "@/common/apiConstants";
import { ScreenshotInfo } from "@/common/types/game";
import { axiosClient } from "@/libs/axiosClient";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const useScreenshots = (gameId: number) => {
  const [screenshots, setScreenshots] = useState<ScreenshotInfo | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getGames = async () => {
    try {
      setIsLoading(true);
      const response = await axiosClient.get<ScreenshotInfo>(API_ENDPOINTS.GET_SCREENSHOTS(gameId));

      if (response.status !== 200) {
        toast.error("Failed to fetch screenshots");
        return;
      }

      setScreenshots(response.data);
      console.log(response.data);
    } catch (error) {
      toast.error("Failed to fetch screenshots", {
        description: error instanceof Error ? error.message : "Unknown error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getGames();
  }, []);

  return { screenshots, isLoading };
};

export default useScreenshots;
