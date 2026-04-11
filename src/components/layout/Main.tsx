import { FC, ReactNode } from "react";

type MainProps = {
  children: ReactNode;
};

const Main: FC<Readonly<MainProps>> = ({ children }) => {
  return <main className="flex flex-col items-center">
    { children }
  </main>;
};

export default Main;
