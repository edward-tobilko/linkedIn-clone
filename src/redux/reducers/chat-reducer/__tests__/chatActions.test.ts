import { v4 as uuidv4 } from "uuid";

import { SocialUserType } from "../../social-reducer/socialReducerTypes";
import { MessagesWithId, StatusType } from "../chatReducerTypes";

import { chatReducer, actions } from "../chatReducer";
import { MessagesPropsType } from "../../../../api/apiTypes";

describe("Chat Actions and Reducer", () => {
  it("should set messages in the state", () => {
    const initialState = {
      messages: [] as MessagesWithId[],
      status: "pending" as StatusType,
      file: null as File | null,
      chatUsers: [] as SocialUserType[],
    };

    const messages: MessagesPropsType[] = [
      {
        userId: 1,
        userName: "John",
        message: "Hello",
        photo: "",
      },
      {
        userId: 2,
        userName: "Bill",
        message: "Good morning",
        photo: "",
      },
    ];

    //? Create expected state with unique IDs
    const expectedState = {
      messages: messages.map((msg) => ({
        ...msg,
        id: uuidv4(),
      })),
      status: "pending",
      file: null,
      chatUsers: [],
    };

    const action = actions.setMessagesAC(messages);
    const newState = chatReducer(initialState, action);

    // expect(newState.messages).toEqual(expect.arrayContaining(messages));

    //! Here is the error!
    //   Object {
    //     "chatUsers": Array [],
    //     "file": null,
    //     "messages": Array [
    //       Object {
    // -       "id": "584c4bec-804b-4ecc-9b9c-46fd0bf5dc64", //? The id doesn't match!
    // +       "id": "d83a47aa-e35c-4fba-b352-5df206116442",
    //         "message": "Hello",
    //         "photo": "",
    //         "userId": 1,
    //         "userName": "John",
    //       },
    //       Object {
    // -       "id": "29f84dab-d781-4ca9-b188-3ce35f0fef1d", //? The id doesn't match
    // +       "id": "f7a0a8ef-ad6d-488d-8e78-254cd0ed0641",
    //         "message": "Good morning",
    //         "photo": "",
    //         "userId": 2,
    //         "userName": "Bill",
    //       },
    expect(newState).toEqual(expectedState);
  });

  it("should set status in the state", () => {
    const initialState = {
      messages: [] as MessagesWithId[],
      status: "pending" as StatusType,
      file: null as File | null,
      chatUsers: [] as SocialUserType[],
    };

    const newStatus = "connected" as StatusType;

    const action = actions.setStatusAC(newStatus);
    const newState = chatReducer(initialState, action);

    expect(newState.status).toEqual(newStatus);
  });

  it("should set file in the state", () => {
    const initialState = {
      messages: [] as MessagesWithId[],
      status: "pending" as StatusType,
      file: null as File | null,
      chatUsers: [] as SocialUserType[],
    };

    const file = new File(["file contents"], "example.txt", {
      type: "text/plain",
    });

    const action = actions.setFileAC(file);
    const newState = chatReducer(initialState, action);

    expect(newState.file).toEqual(file);
  });

  it("should set chat users in the state", () => {
    const initialState = {
      messages: [] as MessagesWithId[],
      status: "pending" as StatusType,
      file: null as File | null,
      chatUsers: [] as SocialUserType[],
    };

    const chatUsers = [
      { id: 1, name: "User 1" },
      { id: 2, name: "User 2" },
    ];

    const action = actions.setChatUsersAC(chatUsers);
    const newState = chatReducer(initialState, action);

    expect(newState.chatUsers).toEqual(expect.arrayContaining(chatUsers));
  });
});
