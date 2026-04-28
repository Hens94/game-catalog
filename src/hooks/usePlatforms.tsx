import { API_ENDPOINTS } from "@/common/apiConstants";
import { PlatformsList } from "@/common/types/game";
import { axiosClient } from "@/libs/axiosClient";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const usePlatforms = () => {
  const [platforms, setPlatforms] = useState<PlatformsList | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);


  const getPlatforms = async () => {
    try {
      setIsLoading(true);
      const response = await axiosClient.get<PlatformsList>(API_ENDPOINTS.GET_PLATFORMS);

      if (response.status !== 200) {
        toast.error("Failed to fetch games");
        return;
      }

      setPlatforms(response.data);
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
    getPlatforms();
  }, []);

  return { platforms, isLoading };
};

export default usePlatforms;
