import { FC } from "react";

import { ContactsStyle } from "./profileStyle";

import { CurrentProfilePagePropsType } from "./profileTypes";

import ContactItem from "./ContactItem";

const Contacts: FC<CurrentProfilePagePropsType> = ({ currentProfilePage }) => {
  if (!currentProfilePage || !currentProfilePage.contacts) {
    return null;
  }

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
