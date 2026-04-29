"use client";

import usePlatforms from "@/hooks/usePlatforms";
import MediaCard from "@/components/ui/MediaCard";
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
        <div className="m-3 md:m-10 columns-1 gap-8 md:columns-3 xl:columns-4">
            {filteredData?.map((data,index) => (
                <MediaCard 
                    key={index}
                    variant="platform"
                    data={data}
                />
            ))}    
        </div>
    )
}

export default PlatformList;