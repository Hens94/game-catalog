import PlatformList from "@/components/layout/platforms/PlatformGrid";
import Loading from "@/components/ui/Loading";
import { Suspense } from "react";

const PlatformsPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <PlatformList />
    </Suspense>
  )
};

export default PlatformsPage;
