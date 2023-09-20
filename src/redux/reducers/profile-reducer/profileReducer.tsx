import { v4 as uniqueID } from "uuid";

import { profileAPI } from "../../../api/API";
import { RootDispatch, RootState } from "../../store";
import { setServerErrorTC } from "../root-app-reducer/rootAppReducer";

import profileTypeNames from "../../duck/typesName";

import {
  AddNewPostACType,
  ChangePostACType,
  InitialStateProps,
  SetCurrentUserPageACType,
  SetDownloadSmallPhotoACType,
  SetLoadingACType,
  SetStatusACType,
} from "./profileReducerTypes";

const initialState: InitialStateProps = {
  postUsers: [
    {
      id: "1",
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
      id: "2",
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
      id: "3",
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
      id: "4",
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
  name: "eduard__tobilko",
  currentProfilePage: null,
  loading: false,
  status: "",
};

const profileReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    // Створюємо новий пост на сторінку profile
    case profileTypeNames.CREATE_NEW_POST:
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
    case profileTypeNames.CHANGE_POST:
      return {
        ...state,
        newPostText: action.newPostText,
      };

    // Показуємо поточну сторінку іншого користувача
    case profileTypeNames.SET_CURRENT_USER_PAGE:
      return { ...state, currentProfilePage: action.currentProfilePage };

    // Додаємо загрузчик
    case profileTypeNames.LOADING:
      return { ...state, loading: action.loading };

    // Показуємо статус користувача
    case profileTypeNames.SET_STATUS:
      return { ...state, status: action.status };

    // Загрузка фото
    case profileTypeNames.DOWNLOAD_SMALL_PHOTO:
      return {
        ...state,
        currentProfilePage: {
          ...state.currentProfilePage,
          photos: action.smallPhoto,
        },
      };

    default:
      return state;
  }
};

export default profileReducer;

// Action Creators (ACs)
export const addNewPostAC = (): AddNewPostACType => {
  return {
    type: profileTypeNames.CREATE_NEW_POST,
  };
};

export const changePostAC = (newPostText: string): ChangePostACType => {
  return {
    type: profileTypeNames.CHANGE_POST,
    newPostText: newPostText,
  };
};

export const setCurrentUserPageAC = (
  currentProfilePage: string | null,
): SetCurrentUserPageACType => {
  return {
    type: profileTypeNames.SET_CURRENT_USER_PAGE,
    currentProfilePage,
  };
};

export const setLoadingAC = (loading: boolean): SetLoadingACType => {
  return {
    type: profileTypeNames.LOADING,
    loading,
  };
};

export const setStatusAC = (status: string): SetStatusACType => {
  return {
    type: profileTypeNames.SET_STATUS,
    status,
  };
};

export const setDownloadSmallPhotoAC = (
  smallPhoto: any,
): SetDownloadSmallPhotoACType => {
  return {
    type: profileTypeNames.DOWNLOAD_SMALL_PHOTO,
    smallPhoto,
  };
};

// TC: Thunk creator - anonym function and HOC - fetchCurrentUserPageTC

// Санка (thunk creator) для отримання поточної сторінки іншого користувача
export const fetchCurrentUserPageTC = (userId: number | null) => {
  return (dispatch: any) => {
    dispatch(setLoadingAC(true));

    profileAPI.fetchCurrentUserPageById(userId).then((data: any) => {
      dispatch(setCurrentUserPageAC(data));

      dispatch(setLoadingAC(false));
    });
  };
};

// TC для отримання статусу користувача
export const fetchUserStatusByIdTC = (userId: number | null) => {
  return (dispatch: any) => {
    profileAPI
      .fetchUserStatusById(userId)
      .then((data: any) => dispatch(setStatusAC(data)))
      .catch((error) => {
        console.log("Error: ", error["message"]);
      });
  };
};

// TC для динамічної зміни статусу
export const updateUserStatusTC = (status: string) => {
  return (dispatch: any) => {
    profileAPI
      .updateUserStatus(status)
      .then((data: any) => {
        if (data.resultCode === 0) {
          dispatch(setStatusAC(status));
        }
      })
      .catch((error) => {
        console.log("Error: ", {
          responseDataMessage: error.response.data["message"],
          responseStatusCode: error.response.request.status,
        });

        //? Якщо буде помилка в url, наприклад: "/profile/statussss", то виводимо глобальну серверну помилку
        const errorMessages = {
          Response_Message: error.response.data["message"],
          Status_Code: error.response.request.status,
        };
        dispatch(setServerErrorTC(errorMessages));
      });
  };
};

// TC для загрузки фото
export const downloadSmallPhotoTC = (photoFile: any) => {
  return (dispatch: any) => {
    dispatch(setLoadingAC(true));
    profileAPI.downloadPhoto(photoFile).then((response: any) => {
      if (response.data.resultCode === 0) {
        dispatch(setDownloadSmallPhotoAC(response.data.data.photos));
        dispatch(setLoadingAC(false));
      }
    });
  };
};

// TC для оновлення інформації користувача
export const profileEditModeTC = (profileProperties: any) => {
  return (dispatch: any, getState: () => RootState) => {
    const myId = getState().authorization.id; //? Отримуємо будь-який параметр через глобальний метод getState()

    dispatch(setLoadingAC(true));

    profileAPI.profileInfoEditMode(profileProperties).then((res: any) => {
      if (res.data.resultCode === 0) {
        dispatch(fetchCurrentUserPageTC(myId));
        dispatch(setLoadingAC(false));
      } else {
        const errorMessage = res.data.messages[0] || "Server error occurred";

        return Promise.reject(errorMessage);
      }
    });
  };
};
