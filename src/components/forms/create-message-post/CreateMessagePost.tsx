import { useState, ChangeEvent, FC, SyntheticEvent } from "react";

import { CreateMessagePostStyle } from "./createMessagePostStyle";

import {
  useTypeDispatch,
  useTypeSelector,
} from "../../../hooks/useTypeSelector";

import {
  addNewFileTC,
  addNewMessageTC,
} from "../../../redux/reducers/chat-reducer/chatReducer";

export const CreateMessagePost: FC = () => {
  const [message, setMessage] = useState("");

  const maxLength = 200;

  const status = useTypeSelector((state) => state.chatPage.status);
  const file = useTypeSelector((state) => state.chatPage.file);
  const currentProfilePage = useTypeSelector(
    (state) => state.profilePage.currentProfilePage,
  );

  const dispatch = useTypeDispatch();

  const handleFileChange = (event: SyntheticEvent<HTMLInputElement>) => {
    if (event.currentTarget.files && event.currentTarget.files.length > 0) {
      dispatch(addNewFileTC(event.currentTarget.files[0]));
    }
  };

  const onKeyPressInTextArea = (e: any) => {
    if (e.ctrlKey && e.code === "Enter") {
      sendNewMessage();
    }
  };

  const sendNewMessage = (): void => {
    if (!message) {
      alert("There should be something written in the field!");
      return;
    }

    const currentTime = String(new Date().toLocaleTimeString());
    const messageWithTime = `${message} (${currentTime})`;

    if (messageWithTime.length > 200) {
      alert(`You can send only 200 symbols! Now are ${messageWithTime.length}`);
      return;
    }

    if (message || file) {
      dispatch(addNewMessageTC(messageWithTime));

      if (currentProfilePage?.currentProfilePage.userId === 29793)
        dispatch(addNewFileTC(file));

      setMessage("");
    }
  };

  return (
    <>
      <CreateMessagePostStyle>
        <form method="post">
          <div className="create__message__post-textarea">
            <textarea
              value={message}
              name="text"
              placeholder="Press 'Ctrl + Enter' to send a message or button Send"
              onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
                setMessage(event.currentTarget.value)
              }
              onKeyDown={onKeyPressInTextArea}
              maxLength={maxLength}
            ></textarea>
          </div>

          <div className="create__message__post-actions">
            <label>
              <input type="file" accept="image/*" onChange={handleFileChange} />
              <img src="https://w7.pngwing.com/pngs/1014/1020/png-transparent-logo-computer-icons-email-send-email-button-miscellaneous-angle-text.png" />
            </label>

            <button
              disabled={status !== "ready"}
              type="button"
              onClick={sendNewMessage}
            >
              Send
            </button>
          </div>
        </form>
      </CreateMessagePostStyle>
    </>
  );
};
