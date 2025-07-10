import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const button = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default button;
