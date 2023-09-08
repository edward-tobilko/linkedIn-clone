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
    background: ${themeVars.colors.headerBackgroundColor};
    border-radius: 10px;

    &-header {
      position: relative;
    }

    &-content {
      padding: 70px 15px 20px 15px;
      display: flex;
      justify-content: space-between;

      &-about {
        padding-left: 30px;
        max-width: 500px;
        width: 100%;

        &-name {
          font-size: 20px;
          text-transform: uppercase;

          span {
            font-size: 13px;
            color: ${themeVars.colors.lightGreyColor};
            text-transform: lowercase;
          }
        }

        &-status {
          display: flex;
          justify-content: flex-start;
          color: ${themeVars.colors.lightGreyColor};
          padding: 7px 0;
          word-break: break-word;
        }

        &-descriptions {
          border-bottom: 0.5px solid ${themeVars.colors.lightGreyColor};
          padding-bottom: 10px;

          &-title {
            letter-spacing: 0.5px;
            font-size: 17px;
            padding: 10px 0;
            display: flex;
            align-items: center;
            font-weight: 600;

            span {
              padding-left: 10px;
              font-weight: 300;
              color: ${themeVars.colors.whiteColor};
              opacity: 0.8;
            }

            i {
              font-size: 25px;
            }
          }
        }
      }

      &-editing {
        position: relative;
      }
    }
  }
`;

export const WrapperImgStyle = styled.img<{ bg: string }>`
  width: 100%;
  height: 300px;
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  box-sizing: border-box;
`;
