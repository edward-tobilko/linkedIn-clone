import styled from "styled-components";

import { themeVars } from "../../utils/vars/themeVars";

// Profile component
export const ProfileStyle = styled.main`
  width: 100%;
  max-width: 820px;
`;

// CreatePostForm component
export const CreatePostStyle = styled.div`
  background-color: ${themeVars.colors.headerBackgroundColor};
  padding: 10px 20px;
  border-radius: 12px;
`;

// CardProfile component
export const CardProfileStyle = styled.div`
  height: 200px;
  position: relative;
  background-color: ${themeVars.colors.headerBackgroundColor};

  .cardProfile__wrapper {
    width: 100%;
    height: 85px;
    border-radius: 12px 12px 0 0;
  }

  .cardProfile__desc {
    text-align: center;
    width: 100%;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);

    &-suptitle {
      padding: 10px 0 5px 0;
      font-size: 18px;
      font-weight: 600;

      a {
        color: ${themeVars.colors.whiteColor};
        text-decoration: none;
      }

      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }

    &-title {
      font-size: 12px;
      padding: 0 8px 10px 8px;
    }
  }
`;

export const CardProfileEditorStyle = styled.label<{
  $sidebarTop: boolean;
  $sidebarRight: boolean;
}>`
  position: absolute;
  right: ${(props) => (props.$sidebarRight ? "10px" : "20px")};
  top: ${(props) => (props.$sidebarTop ? "46%" : "5%")};
  z-index: 1;

  padding: 7px;
  background: ${themeVars.colors.greyColor};
  cursor: pointer;
  border-radius: 50%;
  display: flex;

  i {
    font-size: 18px;
  }

  input {
    display: none;
  }

  &:hover {
    filter: brightness(85%);
  }
`;

// UserProfile component
export const UserProfileStyle = styled.div`
  width: 800px;
  margin: 0 auto;

  .user__profile {
    &-header {
      position: relative;

      &-wrapper {
        width: 100%;
        height: 350px;
      }
    }
  }
`;
