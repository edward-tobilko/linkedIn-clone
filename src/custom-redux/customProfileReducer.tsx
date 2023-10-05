import { v4 as uniqueID } from "uuid";

import { RootState } from "../redux/store";

export const CREATE_NEW_POST = "CREATE-NEW-POST";
export const CHANGE_POST = "CHANGE-POST";

// @ts-ignore
const profileReducer = (state: RootState, action) => {
  switch (action.type) {
    case CREATE_NEW_POST:
      // @ts-ignore
      if (state.newText.trim() !== "") {
        let myNewPost = {
          id: uniqueID(),
          name: "eduard.tobilko",
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

            // @ts-ignore
            bs: state.newText,
          },
        };

        // @ts-ignore
        state.postUsers.push(myNewPost);

        // @ts-ignore
        state.newText = "";
      }
      break;

    case CHANGE_POST:
      // @ts-ignore
      state.newText = action.text;
      break;

    default:
      return state;
  }
};

export default profileReducer;

// Action Creators (AC)
export const addNewPostAC = () => {
  return {
    type: CREATE_NEW_POST,
  };
};

export const changePostAC = (text: string) => {
  return {
    type: CHANGE_POST,
    text: text,
  };
};
