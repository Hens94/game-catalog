"use client";

import usePlatforms from "@/hooks/usePlatforms";
import ProductGrid from "../home/ProductGrid";


const PlatformList = () => { 
    const { platforms, isLoading } = usePlatforms();

    return (
        <ProductGrid 
            items={platforms}
            isLoading={isLoading}
        />
    )
}

export default PlatformList;