import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import {
  fetchSocialUsersTC,
  fetchSocialUsersOnChangedPageTC,
} from "../socialReducer";
import actionCreators from "../../../ducks/actionCreators";
import { socialUsersAPI } from "../../../../api/API";

//? Mock the socialUsersAPI module
jest.mock("../../../../api/API.tsx");
const socialUsersAPIMock = socialUsersAPI as jest.Mocked<typeof socialUsersAPI>;

//? Create a mock store
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("fetchSocialUsersTC and fetchSocialUsersOnChangedPageTC (thunks)", () => {
  it("dispatches the expected actions on successful API call", async () => {
    const currentPage: number = 1;
    const usersCount: number = 10;

    //? Mock the API response data
    const mockData = {
      items: [],
      totalCount: 20,
    };

    //? Mock the API call
    (socialUsersAPIMock.fetchSocialUsers as jest.Mock).mockResolvedValueOnce(
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
    (socialUsersAPIMock.fetchSocialUsers as jest.Mock).mockRejectedValueOnce(
      new Error("API Error"),
    );

    const expectedActions = [actionCreators.setLoadingAC(true)];

    const store = mockStore();

    //? Dispatch the thunk
    await store.dispatch(fetchSocialUsersTC(currentPage, usersCount));

    //? Assert that the expected error actions were dispatched
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("dispatches the expected actions on successful API call on the changed page", async () => {
    const pageNumber: number = 1;
    const usersCount: number = 10;

    //? Mock the API response data
    const mockData = {
      items: [],
    };

    //? Mock the API call
    (
      socialUsersAPIMock.fetchChangedPageUsers as jest.Mock
    ).mockResolvedValueOnce(mockData);

    const expectedActions = [
      actionCreators.setCurrentPageAC(pageNumber),
      actionCreators.setLoadingAC(true),
      actionCreators.setLoadingAC(false),
      actionCreators.setUsersAC(mockData.items),
    ];

    const store = mockStore();

    //? Dispatch the thunk
    await store.dispatch(
      fetchSocialUsersOnChangedPageTC(pageNumber, usersCount),
    );

    //? Assert that the expected actions were dispatched
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("dispatches an error action on API call failure on the changed page", async () => {
    const pageNumber: number = 1;
    const usersCount: number = 10;

    //? Mock the API call to simulate an error
    (
      socialUsersAPIMock.fetchChangedPageUsers as jest.Mock
    ).mockRejectedValueOnce(new Error("API Error"));

    const expectedActions = [
      actionCreators.setCurrentPageAC(pageNumber),
      actionCreators.setLoadingAC(true),
    ];

    const store = mockStore();

    //? Dispatch the thunk
    await store.dispatch(
      fetchSocialUsersOnChangedPageTC(pageNumber, usersCount),
    );

    //? Assert that the expected error actions were dispatched
    expect(store.getActions()).toEqual(expectedActions);
  });
});
