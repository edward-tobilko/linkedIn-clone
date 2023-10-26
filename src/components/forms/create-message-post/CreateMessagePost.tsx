import { useRef, useState, MouseEvent, ChangeEvent } from "react";

import { IMessagesProps } from "../../../context/contextTypes";

import { CreateMessagePostStyle } from "./createMessagePostStyle";

import { useMyContext } from "../../../context/Context";

const date = new Date().toLocaleTimeString();

// console.log(date.toDateString());
// console.log(date.toTimeString());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());

// const minutes = date.getMinutes();
// const hour = date.getHours();

export const CreateMessagePost = () => {
  const [message, setMessage] = useState("");

  const props = useMyContext();

  const newMessagePathRef = useRef<string>(message);

  function createMessage(message: IMessagesProps) {
    props?.setMessages([...props.messages, message]);
  }

  const addNewMessage = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (message.trim() !== "") {
      let newMessageObject = {
        userId: 1,
        userName: "eduard",
        message: message,
        photo: "https://place-hold.it/60",
      };

      if (newMessagePathRef.current !== null) {
        createMessage(newMessageObject);
        setMessage("");
      }
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
              setMessage(event.target.value)
            }
          ></textarea>
        </div>

        <div className="create__message__post-actions">
          <label>
            <input type="file" accept="image/*" />
            <img src="https://w7.pngwing.com/pngs/1014/1020/png-transparent-logo-computer-icons-email-send-email-button-miscellaneous-angle-text.png" />
          </label>
          <button type="button" onClick={addNewMessage}>
            Send
          </button>
        </div>
      </form>
    </CreateMessagePostStyle>
  );
};
