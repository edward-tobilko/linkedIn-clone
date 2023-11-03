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
  const [chatUsers, setChatUsers] = useState([
    { id: 7, name: "Anna Young" },
    { id: 1, name: "Sophia Lee" },
    { id: 3, name: "Julia Cox" },
    { id: 8, name: "James Carter" },
    { id: 5, name: "Richard Bell" },
    { id: 2, name: "John Doe" },
    { id: 10, name: "Anna Young" },
    { id: 9, name: "Sophia Lee" },
    { id: 13, name: "Julia Cox" },
    { id: 11, name: "James Carter" },
    { id: 12, name: "Richard Bell" },
    { id: 15, name: "John Doe" },
  ]);
  const [profileEditMode, setProfileEditMode] = useState(false);
  const [localLoading, setLocalLoading] = useState(false);
  // const [file, setFile] = useState<File | null>(null);

  return (
    <Context.Provider
      value={{
        chatUsers,
        profileEditMode,
        localLoading,
        // file,
        setChatUsers,
        setProfileEditMode,
        setLocalLoading,
        // setFile,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useMyContext = () => useContext(Context);
