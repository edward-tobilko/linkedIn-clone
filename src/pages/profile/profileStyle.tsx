import styled from "styled-components";

import { themeVars } from "../../themeVars";

// Profile component
export const ProfileStyle = styled.main`
  width: 100%;
  max-width: 720px;
`;

export const CreatePostStyle = styled.div`
  background-color: ${themeVars.colors.headerBackgroundColor};
  padding: 10px 20px;
  border-radius: 10px;
`;

// CardProfile component
export const CardProfileStyle = styled.div`
  height: 170px;
  position: relative;

  .cardProfile__wrapper {
    width: 100%;
    height: 85px;
    border-radius: 12px;
  }

  .cardProfile__desc {
    text-align: center;
    width: 100%;
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translateX(-50%);

    h1 {
      padding: 10px 0 5px 0;
      font-size: 18px;
      font-weight: 600;
    }

    p {
      font-size: 13px;
      font-weight: 400;
      color: ${themeVars.colors.lightGreyColor};
    }
  }
`;
