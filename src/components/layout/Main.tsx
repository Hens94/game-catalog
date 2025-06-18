import { FC, ReactNode } from "react";

type MainProps = {
  children: ReactNode;
};

const Main: FC<Readonly<MainProps>> = ({ children }) => {
  return <main className="flex-1">{children}</main>;
};

export default Main;
