import { useRef, useState, MouseEvent, ChangeEvent } from "react";
import { v4 as uniqueID } from "uuid";

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
  const [message, setMessage] = useState({
    voice: {
      say: "",
    },
  });

  const props = useMyContext();

  const newMessagePathRef = useRef<string>(message.voice.say);

  function createMessage(message: string | any) {
    props?.setDialogUsers([...props.dialogUsers, message]);
  }

  const addNewMessage = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (message.voice.say.trim() !== "") {
      let myNewMessage = {
        ...message,
        id: uniqueID(),
        name: "eduard.tobilko",
        dataTime: date,
      };

      if (newMessagePathRef.current !== null) {
        createMessage(myNewMessage);
        setMessage({ voice: { say: "" } });
      }
    }
  };

  return (
    <CreateMessagePostStyle>
      <form method="post">
        <div className="create__message__post-textarea">
          <textarea
            value={message.voice.say}
            name="text"
            placeholder="Add new message"
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
              setMessage({
                ...message,
                voice: { say: event.target.value },
              })
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
