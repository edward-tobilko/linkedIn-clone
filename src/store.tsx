import { v4 as uniqueID } from "uuid";

declare global {
  interface Window {
    store: any;
  }
}

export const CREATE_NEW_POST = "CREATE-NEW-POST";
export const CHANGE_POST = "CHANGE-POST";

const store: any = {
  _state: {
    profilePosts: {
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

      newText: "",
    },
  },

  _callSubscriber() {
    console.log("event");
  },

  getState() {
    return this._state;
  },

  subscribe(observer: any) {
    this._callSubscriber = observer;
  },

  _addNewPost() {
    if (this._state.profilePosts.newText.trim() !== "") {
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
          bs: this._state.profilePosts.newText,
        },
      };

      this._state.profilePosts.postUsers.push(myNewPost);
      this._state.profilePosts.newText = "";
      this._callSubscriber(this._state);
    }
  },

  _changePost(text: string) {
    this._state.profilePosts.newText = text;
    this._callSubscriber(this._state);
  },

  dispatch(action: any) {
    if (action.type === CREATE_NEW_POST) {
      this._addNewPost();
    } else if (action.type === CHANGE_POST) {
      this._changePost(action.text);
    }
  },
};

export default store;

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

window.store = store;
