import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import { setIsAuthTC } from "../authReducer";
import { actions } from "../authReducer";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

describe("authThunks", () => {
  let mock: any;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  it("dispatches the correct action after successful setIsAuthTC", async () => {
    const expectedActions = [
      actions.setIsAuthAC(1, "test@example.com", "user", true),
    ];

    mock.onGet("auth/me").reply(200, {
      resultCode: 0,
      data: { id: 1, email: "test@example.com", login: "user" },
    });

    await store.dispatch(setIsAuthTC());

    expect(store.getActions()).toEqual(expectedActions);
  });
});
