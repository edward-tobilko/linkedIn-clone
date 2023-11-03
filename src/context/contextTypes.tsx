interface IChatUsers {
  name: string;
  id: number;
  uniqueUrlName: null;
  photos: {
    small: string;
    large: string;
  };
  status: string;
  followed: boolean;
}

interface IStateContext {
  profileEditMode: boolean;
  setProfileEditMode: (profileEditMode: boolean) => void;

  localLoading: boolean;
  setLocalLoading: (profileEditMode: boolean) => void;
}

// DropDownContextProvider component
interface IDropdownContext {
  isOpenDropdown: boolean;
  toggleDropdownMode: () => void;
}

export { IStateContext, IChatUsers, IDropdownContext };
