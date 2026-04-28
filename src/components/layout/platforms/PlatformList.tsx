"use client";

import usePlatforms from "@/hooks/usePlatforms";
import MediaCard from "@/components/ui/MediaCard";
import Loading from "@/components/ui/Loading";


const PlatformList = () => { 
    const { platforms, isLoading } = usePlatforms();

    if (isLoading) {
    return <Loading />;
  }

  if (platforms?.results?.length === 0) {
    return <div className="text-center text-2xl font-bold">No platforms found</div>;
  }

    return (
        <div className="m-3 md:m-10 columns-1 gap-8 md:columns-3 xl:columns-4">
            <MediaCard 
                variant="platform"
                data={platforms}
            />
        </div>
    )
}

export default PlatformList;