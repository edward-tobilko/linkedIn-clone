import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { StatusType } from "../chatReducerTypes";
import { MessagesPropsType } from "../../../../api/apiTypes";

import {
  newStatusHandlerHOC,
  newMessagesHandlerHOC,
  actions,
} from "../chatReducer";

jest.mock("../../../../api/API.tsx", () => ({
  chatAPI: {
    start: jest.fn(),
    fetchSubscribeMessages: jest.fn(),
    fetchStatus: jest.fn(),
  },
}));

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Tests thunks", () => {
  it("newStatusHandlerHOC: should dispatch set status action", () => {
    const mockDispatch = jest.fn();

    const newStatusHandler = newStatusHandlerHOC(mockDispatch);

    const newStatus: StatusType = "pending";

    newStatusHandler(newStatus);

    expect(mockDispatch).toHaveBeenCalledWith(actions.setStatusAC(newStatus));
  });

  it("newMessagesHandlerHOC: should dispatch set messages action", () => {
    const mockDispatch = jest.fn();

    const newMessagesHandler = newMessagesHandlerHOC(mockDispatch);

    const newMessages: MessagesPropsType[] = [];

    newMessagesHandler(newMessages);

    expect(mockDispatch).toHaveBeenCalledWith(
      actions.setMessagesAC(newMessages),
    );
  });
});
