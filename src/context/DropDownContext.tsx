import { FC, createContext, useState } from "react";

export const DropdownContext: any = createContext({
  isOpenDropdown: true,
  toggleMenu: () => {},
});

const DropDownState: FC<any> = ({ children }) => {
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

export default DropDownState;
