import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom/extend-expect";

import ToDoLists from "../ToDoLists";

//? Mock the fetchCurrentUserPageTC action creator
jest.mock("../../../redux/reducers/profile-reducer/profileReducer.tsx", () => ({
  fetchCurrentUserPageTC: jest.fn(),
}));

const mockStore = configureStore([]);

describe("ToDoLists component", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      profile: {
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
        ],
        newPostText: "",
        name: "eduard__tobilko",
        currentProfilePage: null,
        loading: false,
        status: "",
      },
    });
  });

  it("renders the component with initial state", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ToDoLists />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText("Add new Todo Item")).toBeInTheDocument();
  });

  //   it("dispatches the fetchCurrentUserPageTC action on mount", async () => {
  //     render(
  //       <Provider store={store}>
  //         <BrowserRouter>
  //           <ToDoLists />
  //         </BrowserRouter>
  //       </Provider>,
  //     );

  //     // Wait for the asynchronous action to be dispatched
  //     await waitFor(() =>
  //       expect(store.getActions()).toContainEqual(fetchCurrentUserPageTC(29793)),
  //     );
  //   });

  //   it("adds a new todo list", async () => {
  //     render(
  //       <Provider store={store}>
  //         <BrowserRouter>
  //           <ToDoLists />
  //         </BrowserRouter>
  //       </Provider>,
  //     );

  //     // Trigger the add new todo list functionality
  //     act(() => {
  //       fireEvent.click(screen.getByLabelText("Add Todo Item"));
  //     });

  //     // You may need to add more specific assertions here based on your component behavior
  //     // For example, check if a new todo list is added to the state
  //     // or if the UI is updated accordingly
  //   });
});
