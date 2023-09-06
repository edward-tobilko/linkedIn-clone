import { FC } from "react";

export const RemoveBtn: FC<any> = ({ className, children }) => {
  return <button className={className}>{children}</button>;
};
