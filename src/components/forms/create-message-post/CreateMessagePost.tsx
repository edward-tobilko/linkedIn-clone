import React from "react";

import { CreateMessagePostStyle } from "./createMessagePostStyle";

export const CreateMessagePost = () => {
  return (
    <CreateMessagePostStyle>
      <form>
        <div className="create__message__post-textarea">
          <textarea name="text" placeholder="Add new message"></textarea>
        </div>

        <div className="create__message__post-actions">
          <label>
            <input type="file" accept="image/*" />
            <img src="https://w7.pngwing.com/pngs/1014/1020/png-transparent-logo-computer-icons-email-send-email-button-miscellaneous-angle-text.png" />
          </label>
          <button>Send</button>
        </div>
      </form>
    </CreateMessagePostStyle>
  );
};
