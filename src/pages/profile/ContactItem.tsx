import { FC } from "react";

import { ContactItemStyle } from "./profileStyle";

import { ContactItemProps } from "../../components/sidebar/sidebarTypes";

const ContactItem: FC<ContactItemProps> = ({ contactKey, contactValue }) => {
  return (
    <ContactItemStyle>
      <p>
        {contactKey}:
        {contactValue?.length > 0 ? (
          <a href={contactValue} className="link" target="blank">
            {contactValue}
          </a>
        ) : (
          <span>No URL...</span>
        )}
      </p>
    </ContactItemStyle>
  );
};

export default ContactItem;
