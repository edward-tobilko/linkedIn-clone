import { FC, createContext, useState } from "react";

import { IDropDownContextProviderProps } from "./contextTypes";

export const DropdownContext = createContext<any>({
  isOpenDropdown: true,
  setIsOpenDropdown: () => {},
});

const DropDownContextProvider: FC<IDropDownContextProviderProps> = ({
  children,
}) => {
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
