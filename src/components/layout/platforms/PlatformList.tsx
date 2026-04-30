"use client";

import usePlatforms from "@/hooks/usePlatforms";
import MediaCard from "@/components/layout/home/MediaCard";
import Loading from "@/components/ui/Loading";
import { GridItem } from "@/common/types/game";

const platformArray: string[] = ['playstation4','playstation5','xbox-one','xbox-series-x','nintendo-switch']



const PlatformList = () => { 
    const { platforms, isLoading } = usePlatforms();

    const filteredData: GridItem[] | undefined = platforms?.results?.filter((platform) => platformArray.includes(platform.slug));

    if (isLoading) {
    return <Loading />;
  }

  if (platforms?.results?.length === 0) {
    return <div className="text-center text-2xl font-bold">No platforms found</div>;
  }

    return (
        <div className="grid grid-cols-1 w-screen ">
            <h2 className="px-10 py-2 text-3xl font-bold">Juegos por Plataformas disponibles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 m-4">
                {filteredData?.map((data,index) => (
                    <MediaCard 
                        className=""
                        key={index}
                        variant="platform"
                        data={data}

                    />
                ))}    
            </div>
        </div>
    )
}

export default PlatformList;