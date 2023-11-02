import { useState, MouseEvent, ChangeEvent, FC } from "react";

import { CreateMessagePostStyle } from "./createMessagePostStyle";

import {
  useTypeDispatch,
  useTypeSelector,
} from "../../../hooks/useTypeSelector";

import { addNewMessageTC } from "../../../redux/reducers/chat-reducer/chatReducer";

export const CreateMessagePost: FC = () => {
  const [message, setMessage] = useState("");

  const status = useTypeSelector((state) => state.chatPage.status);

  const dispatch = useTypeDispatch();

  const addNewMessage = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (message) {
      dispatch(addNewMessageTC(message));
      setMessage("");
    }
  };

  return (
    <CreateMessagePostStyle>
      <form method="post">
        <div className="create__message__post-textarea">
          <textarea
            value={message}
            name="text"
            placeholder="Add new message"
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
              setMessage(event.currentTarget.value)
            }
          ></textarea>
        </div>

        <div className="create__message__post-actions">
          <label>
            <input type="file" accept="image/*" />
            <img src="https://w7.pngwing.com/pngs/1014/1020/png-transparent-logo-computer-icons-email-send-email-button-miscellaneous-angle-text.png" />
          </label>

          <button
            disabled={status !== "ready"}
            type="button"
            onClick={addNewMessage}
          >
            Send
          </button>
        </div>
      </form>
    </CreateMessagePostStyle>
  );
};
