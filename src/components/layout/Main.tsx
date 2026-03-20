import { FC, ReactNode } from "react";

type MainProps = {
  children: ReactNode;
};

const Main: FC<Readonly<MainProps>> = ({ children }) => {
  return <main className="flex-1 flex flex-col items-center">
    { children }
  </main>;
};

export default Main;
