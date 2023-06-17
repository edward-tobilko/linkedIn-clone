import { useRef, useState, MouseEvent, ChangeEvent } from "react";
import { v4 as uniqueID } from "uuid";

import { CreateMessagePostStyle } from "./createMessagePostStyle";

import { useMyContext } from "../../../context/Context";

const date = new Date();

const seconds = date.getSeconds();
const minutes = date.getMinutes();
const hour = date.getHours();

export const CreateMessagePost = () => {
  const [message, setMessage] = useState({
    say: "",
  });

  const props = useMyContext();

  const newMessagePathRef = useRef<string>(message.say);

  function createMessage(message: string | any) {
    props?.setDialogUsers([...props.dialogUsers, message]);
  }

  const addNewMessage = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    let myNewMessage = {
      ...message,
      id: uniqueID(),
      name: "eduard.tobilko",
      dataTime: `${hour}:${minutes}:${seconds}`,
    };

    if (newMessagePathRef.current !== null) {
      createMessage(myNewMessage);
      setMessage({ say: "" });
    }
  };

  return (
    <CreateMessagePostStyle>
      <form method="post">
        <div className="create__message__post-textarea">
          <textarea
            value={message.say}
            name="text"
            placeholder="Add new message"
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
              setMessage({ ...message, say: event.target.value })
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
