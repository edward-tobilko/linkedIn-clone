import { v4 as uniqueID } from "uuid";

import { profileAPI } from "../../api/API";
import { RootDispatch } from "../store";

export const CREATE_NEW_POST = "CREATE-NEW-POST";
export const CHANGE_POST = "CHANGE-POST";
export const UPDATE_SEARCH_POST = "UPDATE-SEARCH-POST";
export const SET_CURRENT_USER_PAGE = "SET-CURRENT-USER-PAGE";
export const LOADING = "LOADING";
export const SET_STATUS = "SET-STATUS";

type GeoProps = {
  lat: string;
  lng: string;
};

type AddressProps = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoProps;
};

type CompanyProps = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type ItemProps = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressProps;
  phone: string;
  website: string;
  company: CompanyProps;
};

export type InitialStateProps = {
  postUsers: ItemProps[];
  newPostText: string;
  name: string;
  currentProfilePage: any;
  loading: boolean;
  status: string;
};

const initialState: InitialStateProps = {
  postUsers: [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: {
          lat: "-43.9509",
          lng: "-34.4618",
        },
      },
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains",
      },
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      address: {
        street: "Douglas Extension",
        suite: "Suite 847",
        city: "McKenziehaven",
        zipcode: "59590-4157",
        geo: {
          lat: "-68.6102",
          lng: "-47.0653",
        },
      },
      phone: "1-463-123-4447",
      website: "ramiro.info",
      company: {
        name: "Romaguera-Jacobson",
        catchPhrase: "Face to face bifurcated interface",
        bs: "e-enable strategic applications",
      },
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
      address: {
        street: "Hoeger Mall",
        suite: "Apt. 692",
        city: "South Elvis",
        zipcode: "53919-4257",
        geo: {
          lat: "29.4572",
          lng: "-164.2990",
        },
      },
      phone: "493-170-9623 x156",
      website: "kale.biz",
      company: {
        name: "Robel-Corkery",
        catchPhrase: "Multi-tiered zero tolerance productivity",
        bs: "transition cutting-edge web services",
      },
    },
  ],
  newPostText: "",
  name: "eduard.tobilko",
  currentProfilePage: null,
  loading: false,
  status: "",
};

const profileReducer = (state = initialState, action: any) => {
  switch (action.type) {
    // Створюємо новий пост на сторінку profile
    case CREATE_NEW_POST:
      // вертаємо новий об'єкт (return {}), в якому розгортаємо старий об'єкт (...state), після робимо глибоку копію масива постів (...state.postUsers) та пушимо новий об'єкт в масив і зануляємо інпут (newPostText: "");
      return {
        ...state,
        postUsers: [
          ...state.postUsers,
          {
            id: uniqueID(),
            name: state.name,
            username: "",
            email: "email@gmail.com",
            address: {
              street: "Academic queen str.",
              suite: "",
              city: "Cherkasy",
              zipcode: "",
              geo: {
                lat: "",
                lng: "",
              },
            },
            phone: "38-073-234-56-11",
            website: "",
            company: {
              name: "Romaguera-Crona",
              catchPhrase: "Multi-layered client-server neural-net",
              bs: state.newPostText,
            },
          },
        ],
        newPostText: "",
      };

    // Для динамічної поведінки onChange обробника подій
    case CHANGE_POST:
      return {
        ...state,
        newPostText: action.newPostText,
      };

    // Показуємо поточну сторінку іншого користувача
    case SET_CURRENT_USER_PAGE:
      return { ...state, currentProfilePage: action.currentProfilePage };

    // Додаємо загрузчик
    case LOADING:
      return { ...state, loading: action.loading };

    // Показуємо статус користувача
    case SET_STATUS:
      return { ...state, status: action.status };

    default:
      return state;
  }
};

export default profileReducer;

// Action Creators (ACs)
export const addNewPostAC = () => {
  return {
    type: CREATE_NEW_POST,
  };
};

export const changePostAC = (newPostText: string) => {
  return {
    type: CHANGE_POST,
    newPostText: newPostText,
  };
};

export const setCurrentUserPageAC = (currentProfilePage: any) => {
  return {
    type: SET_CURRENT_USER_PAGE,
    currentProfilePage,
  };
};

export const setLoadingAC = (loading: boolean) => {
  return {
    type: LOADING,
    loading,
  };
};

export const setStatusAC = (status: string) => {
  return {
    type: SET_STATUS,
    status,
  };
};

// TC: Thunk creator - anonym function and HOC - fetchCurrentUserPageTC

// Санка (thunk creator) для отримання поточної сторінки іншого користувача
export const fetchCurrentUserPageTC = (userId: string) => {
  return (dispatch: RootDispatch) => {
    dispatch(setLoadingAC(true));

    profileAPI.fetchCurrentUserPageById(userId).then((data: any) => {
      dispatch(setCurrentUserPageAC(data));

      dispatch(setLoadingAC(false));
    });
  };
};

// TC для отримання статусу користувача
export const fetchUserStatusByIdTC = (userId: string) => {
  return async (dispatch: RootDispatch) => {
    const response: any = await profileAPI.fetchUserStatusById(userId);

    dispatch(setStatusAC(response.data));
  };
};

// TC для динамічної зміни статусу
export const updateUserStatusTC = (status: string) => {
  return async (dispatch: RootDispatch) => {
    try {
      const response: any = await profileAPI.updateUserStatus(status);

      if (response.data.resultCode === 0) {
        dispatch(setStatusAC(status));

        console.log(response.data);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };
};
