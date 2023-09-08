import { FC } from "react";

import { ContactItemStyle } from "./sidebarStyle";

const ContactItem: FC<any> = ({ currentProfilePage, contactKeyValue }) => {
  return (
    <ContactItemStyle>
      <p>
        {contactKeyValue}:
        <a
          href={currentProfilePage?.contacts[contactKeyValue]}
          className="link"
          target="blank"
        >
          {currentProfilePage?.contacts[contactKeyValue]}
        </a>
      </p>
    </ContactItemStyle>
  );
};

export default ContactItem;
