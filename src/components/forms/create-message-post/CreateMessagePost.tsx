import { useState, MouseEvent, ChangeEvent, useEffect, FC } from "react";

import { CreateMessagePostStyle } from "./createMessagePostStyle";

export const CreateMessagePost: FC<{ newWs: WebSocket | null }> = ({
  newWs,
}) => {
  const [message, setMessage] = useState("");
  const [readyState, setReadyState] = useState<"pending" | "ready">("pending"); //? Стан для WebSocket каналу, щоб на початку підгрузився канал, а потім компонента, тобто в стані "pending" кнопка буде "disable".

  newWs = new WebSocket(
    "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx",
  );

  const addNewMessage = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (message && newWs) {
      newWs.send(message);
      setMessage("");
    }
  };

  useEffect(() => {
    const openHandler = () => {
      setReadyState("ready");
    };

    newWs?.addEventListener("open", openHandler);

    //? Щоб дістатися до старого стейту newWs після перерисовки нам потрібно від нього відписатися
    return () => {
      // cleanup
      newWs?.removeEventListener("open", openHandler);
    };
  }, [newWs]);

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
            disabled={newWs === null || readyState !== "ready"}
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
