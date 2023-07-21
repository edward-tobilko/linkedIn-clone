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
    default:
      return state;
  }
};

export default socialReducer;
