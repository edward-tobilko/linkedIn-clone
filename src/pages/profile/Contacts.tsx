import { FC } from "react";

import { ContactsStyle } from "./profileStyle";

import { CurrentProfilePageProps } from "./profileTypes";

import ContactItem from "./ContactItem";

const Contacts: FC<CurrentProfilePageProps> = ({ currentProfilePage }) => {
  return (
    <ContactsStyle>
      <h1 className="title">Contacts:</h1>
      <ul className="menu">
        {Object.entries(currentProfilePage?.contacts).map(
          ([contactKey, contactValue]) => (
            <ContactItem
              key={contactKey}
              contactKey={contactKey}
              contactValue={contactValue}
            />
          ),
        )}
      </ul>
    </ContactsStyle>
  );
};

export default Contacts;
