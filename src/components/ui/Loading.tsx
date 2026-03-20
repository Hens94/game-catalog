"use client";

import { Loader2Icon } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Loader2Icon className="size-8 animate-spin-clockwise repeat-infinite stroke-primary" />
    </div>
  );
};

export default Loading;
