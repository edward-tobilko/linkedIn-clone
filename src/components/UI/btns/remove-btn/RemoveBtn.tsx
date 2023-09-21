import { FC, ReactNode } from "react";

type RemoveBtnProps = {
  className?: string;
  children: ReactNode;
};

export const RemoveBtn: FC<RemoveBtnProps> = ({ className, children }) => {
  return <button className={className}>{children}</button>;
};
