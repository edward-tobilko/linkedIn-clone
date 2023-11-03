import {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
  FC,
} from "react";

import { IStateContext } from "./contextTypes";

export const Context = createContext<IStateContext | null>(null);

export const ContextProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [profileEditMode, setProfileEditMode] = useState(false);
  const [localLoading, setLocalLoading] = useState(false);

  return (
    <Context.Provider
      value={{
        profileEditMode,
        localLoading,
        setProfileEditMode,
        setLocalLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useMyContext = () => useContext(Context);
