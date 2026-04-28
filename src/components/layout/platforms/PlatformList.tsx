"use client";

import usePlatforms from "@/hooks/usePlatforms";
import ProductGrid from "../home/ProductGrid";


const PlatformList = () => { 
    const { platforms, isLoading } = usePlatforms();

    return (
        // <ProductGrid 
        // games={platforms}
        // isLoading={isLoading}
        // />
        <div>PlatformsPage</div>
    )
}

export default PlatformList;