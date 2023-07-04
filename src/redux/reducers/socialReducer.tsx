const initialState = {
  users: [
    {
      id: 1,
      fullName: "John",
      status: "status-1",
      img: "https://place-hold.it/70",
      location: {
        city: "London",
        country: "United Kingdom",
      },
      followed: false,
    },
  ],
};

const socialReducer = (state: any = initialState, action: any) => {};
