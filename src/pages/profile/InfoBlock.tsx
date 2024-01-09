import { FC } from "react";

import { InfoBlockStyle } from "./profileStyle";

const InfoBlock: FC = () => {
  return (
    <InfoBlockStyle>
      <h1 className="title">Test access for this project:</h1>

      <br />

      <p className="email">
        Email: <span>1992eduard777clone@gmail.com</span>
      </p>
      <p className="password">
        Password: <span>1q2w3e4r</span>
      </p>

      <br />

      <p className="own__profile">
        My own profile: userId - 29793, link - &nbsp;
        <a
          href="https://edward-tobilko.github.io/linkedIn-clone/#/user-profile/29793"
          target="blank"
          className="own__profile-link"
        >
          Samurai Social Network
        </a>
      </p>

      <br />

      <p className="conclusion">
        If some functional works incorrectly, or if you have some questions,
        write me in -
        <a
          href="https://www.linkedin.com/in/eduardtobilko/"
          className="conclusion-link"
          target="blank"
        >
          LinkedIn
        </a>
        .
      </p>

      <br />

      <p className="github__repo">
        See my &nbsp;
        <a
          href="https://github.com/edward-tobilko/linkedIn-clone"
          target="blank"
          className="github__repo-link"
        >
          GitHub repo for the full code
        </a>
        .
      </p>

      <br />

      <p className="conclusion">I will be happy for the stars for it :)</p>
      <p className="conclusion">Thank you all and happy learning :)</p>
    </InfoBlockStyle>
  );
};

export default InfoBlock;
