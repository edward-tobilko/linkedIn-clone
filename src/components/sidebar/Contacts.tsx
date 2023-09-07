import { FC } from "react";
import { v4 as uuidv4 } from "uuid";

import { ContactsStyle } from "./sidebarStyle";

const contactsData = [
  {
    id: uuidv4(),
    name: "GitHub",
    link: "github",
    icon: <i className="bx bxl-github"></i>,
  },
  {
    id: uuidv4(),
    name: "VK",
    link: "vk",
    icon: <i className="bx bxl-vk"></i>,
  },
  {
    id: uuidv4(),
    name: "Facebook",
    link: "facebook",
    icon: <i className="bx bxl-facebook-circle"></i>,
  },
  {
    id: uuidv4(),
    name: "Instagram",
    link: "instagram",
    icon: <i className="bx bxl-instagram"></i>,
  },
  {
    id: uuidv4(),
    name: "Twitter",
    link: "twitter",
    icon: <i className="bx bxl-twitter"></i>,
  },
  {
    id: uuidv4(),
    name: "YouTube",
    link: "youtube",
    icon: <i className="bx bxl-youtube"></i>,
  },
  {
    id: uuidv4(),
    name: "Gmail",
    link: "mainLink",
    icon: <i className="bx bxl-gmail"></i>,
  },
];

const Contacts: FC<any> = ({ currentProfilePage }) => {
  return (
    <ContactsStyle>
      <h1 className="title">Contacts:</h1>
      <ul className="menu">
        {Object.keys(currentProfilePage?.contacts).map((contactKey) => (
          <>
            <li className="menu-list" key={contactKey}>
              <p>
                {contactKey}:
                <a
                  href={currentProfilePage?.contacts[contactKey]}
                  className="menu-link"
                  target="blank"
                >
                  {currentProfilePage?.contacts[contactKey]}
                </a>
              </p>
            </li>
          </>
        ))}
      </ul>
    </ContactsStyle>
  );
};

export default Contacts;
