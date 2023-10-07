import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { fetchSocialUsersTC } from "../socialReducer";
import actionCreators from "../../../ducks/actionCreators";
// import { socialUsersAPI } from "../../../../api/API";

//? Mock the socialUsersAPI module
jest.mock("../../../../api/API.tsx", () => ({
  fetchSocialUsers: jest.fn(),
  fetchChangedPageUsers: jest.fn(),
}));
// const mockedSocialUsersAPI = socialUsersAPI;

//? Create a mock store
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("fetchSocialUsersTC (thunks)", () => {
  it("dispatches the expected actions on successful API call", async () => {
    const currentPage: number = 1;
    const usersCount: number = 10;

    //? Mock the API response data
    const mockData = {
      items: [],
      totalCount: 20,
    };

    //? Mock the API call
    (socialUsersAPI.fetchSocialUsers as jest.Mock).mockResolvedValueOnce(
      mockData,
    );

    const expectedActions = [
      actionCreators.setLoadingAC(true),
      actionCreators.setCurrentPageAC(currentPage),
      actionCreators.setLoadingAC(false),
      actionCreators.setUsersAC(mockData.items),
      actionCreators.setTotalUsersCountAC(mockData.totalCount),
    ];

    const store = mockStore();

    //? Dispatch the thunk
    await store.dispatch(fetchSocialUsersTC(currentPage, usersCount));

    //? Assert that the expected actions were dispatched
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("dispatches an error action on API call failure", async () => {
    const currentPage: number = 1;
    const usersCount: number = 10;

    //? Mock the API call to simulate an error
    (socialUsersAPI.fetchSocialUsers as jest.Mock).mockRejectedValueOnce(
      new Error("API Error"),
    );

    const expectedActions = [
      actionCreators.setLoadingAC(true),
      //? Add other expected error actions
    ];

    const store = mockStore();

    //? Dispatch the thunk
    await store.dispatch(fetchSocialUsersTC(currentPage, usersCount));

    //? Assert that the expected error actions were dispatched
    expect(store.getActions()).toEqual(expectedActions);
  });
});
