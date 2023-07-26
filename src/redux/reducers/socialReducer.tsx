const FOLLOW = "follow";
const UNFOLLOW = "un-follow";
const SETUSERS = "set-users";

const initialState = {
  socialUsers: [
    {
      id: 1,
      fullName: "John",
      status: "status-1",
      wrapper: "https://place-hold.it/170",
      img: "https://place-hold.it/90",
      location: {
        city: "London",
        country: "United Kingdom",
      },
      followed: false,
    },
    {
      id: 2,
      fullName: "Ben",
      status: "status-2",
      wrapper: "https://place-hold.it/170",
      img: "https://place-hold.it/90",
      location: {
        city: "New York",
        country: "United Sates",
      },
      followed: true,
    },
    {
      id: 3,
      fullName: "Max",
      status: "status-3",
      wrapper: "https://place-hold.it/170",
      img: "https://place-hold.it/90",
      location: {
        city: "Cherkasy",
        country: "Ukraine",
      },
      followed: true,
    },
    {
      id: 4,
      fullName: "Max",
      status: "status-3",
      wrapper: "https://place-hold.it/170",
      img: "https://place-hold.it/90",
      location: {
        city: "Cherkasy",
        country: "Ukraine",
      },
      followed: true,
    },
    {
      id: 5,
      fullName: "Max",
      status: "status-3",
      wrapper: "https://place-hold.it/170",
      img: "https://place-hold.it/90",
      location: {
        city: "Cherkasy",
        country: "Ukraine",
      },
      followed: true,
    },
    {
      id: 6,
      fullName: "Max",
      status: "status-3",
      wrapper: "https://place-hold.it/170",
      img: "https://place-hold.it/90",
      location: {
        city: "Cherkasy",
        country: "Ukraine",
      },
      followed: true,
    },
  ],
};

const socialReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    // Додаємо користувача
    case FOLLOW:
      return {
        ...state,
        socialUsers: [
          state.socialUsers.map((socialUser: any) => {
            if (socialUser.id === action.userId) {
              return { ...socialUser, followed: true };
            }

            return socialUser;
          }),
        ],
      };

    // Видаляємо користувача
    case UNFOLLOW:
      return {
        ...state,
        socialUsers: [
          ...state.socialUsers.map((socialUser: any) => {
            if (socialUser.id === action.userId) {
              return { ...socialUser, followed: false };
            }

            return socialUser;
          }),
        ],
      };

    // Встановлюємо (відображаємо) користувачів в стейт (на сторінці)
    case SETUSERS:
      return {
        ...state,
        newUsers: [...action.users],
      };

    default:
      return state;
  }
};

// ACs
export const followUserAC = (userId: any) => {
  return {
    type: FOLLOW,
    userId,
  };
};

export const unFollowUserAC = (userId: any) => {
  return {
    type: UNFOLLOW,
    userId,
  };
};

export const setUsersAC = (newUsers: any) => {
  return {
    type: SETUSERS,
    newUsers,
  };
};

export default socialReducer;
