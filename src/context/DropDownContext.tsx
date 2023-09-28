import { FC, PropsWithChildren, createContext, useState } from "react";

import { IDropdownContext } from "./contextTypes";

export const DropdownContext = createContext<IDropdownContext | null>(null);

const DropDownContextProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  // Open or close dropdown
  function toggleDropdownMode() {
    setIsOpenDropdown(!isOpenDropdown);
  }

  return (
    <DropdownContext.Provider
      value={{
        isOpenDropdown,
        toggleDropdownMode,
      }}
    >
      {children}
    </DropdownContext.Provider>
  );
};

export default DropDownContextProvider;
