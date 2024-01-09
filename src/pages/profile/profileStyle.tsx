import styled from "styled-components";

import { themeVars } from "../../utils/vars/themeVars";

// Profile component
export const ProfileStyle = styled.main`
  width: 100%;
  max-width: 820px;

  @media screen and (max-width: ${themeVars.breakpoints.breakpoint1200}) {
    max-width: 650px;
  }

  @media screen and (max-width: ${themeVars.breakpoints.breakpoint768}) {
    max-width: 500px;
  }

  @media screen and (max-width: ${themeVars.breakpoints.breakpoint576}) {
    max-width: 350px;
  }

  @media screen and (max-width: ${themeVars.breakpoints.breakpoint420}) {
    max-width: 300px;
  }
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

  @media screen and (max-width: ${themeVars.breakpoints.breakpoint576}) {
    top: ${({ $sidebarTop }) => ($sidebarTop ? "46%" : "-5%")};
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
          position: absolute;
        }

        &-descriptions {
          border-bottom: 0.5px solid ${themeVars.colors.lightGreyColor};
          padding-bottom: 10px;
          padding-top: 60px;

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
              opacity: 0.6;
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

      @media screen and (max-width: ${themeVars.breakpoints.breakpoint576}) {
        padding: 50px 5px 10px 5px;
      }
    }
  }

  @media screen and (max-width: ${themeVars.breakpoints.breakpoint768}) {
    width: 650px;

    .user__profile {
      &-content {
        &-about {
          padding-left: 15px;

          &-name {
            font-size: 17px;
          }

          &-descriptions {
            padding-bottom: 5px;
            padding-top: 40px;

            &-title {
              font-size: 15px;
              padding: 7px 0;

              span {
                padding-left: 5px;
              }

              i {
                font-size: 20px;
              }
            }
          }
        }
      }
    }
  }
`;

// Contacts component
export const ContactsStyle = styled.div`
  width: 100%;

  .title {
    font-size: 25px;
    padding: 16px 0;
  }

  @media screen and (max-width: ${themeVars.breakpoints.breakpoint768}) {
    .title {
      font-size: 20px;
      padding: 12px 0;
    }
  }
`;

// ContactItem component
export const ContactItemStyle = styled.li`
  font-size: 18px;

  p {
    .link {
      color: ${themeVars.colors.lightGreyColor};
      text-decoration: none;
      padding-left: 5px;
      font-size: 14px;

      &:hover {
        text-decoration: underline;
      }
    }

    span {
      color: ${themeVars.colors.errorColor};
      font-size: 14px;
      padding-left: 7px;
    }
  }

  @media screen and (max-width: ${themeVars.breakpoints.breakpoint768}) {
    font-size: 16px;

    p {
      .link {
        font-size: 13px;
      }

      span {
        font-size: 12px;
        padding-left: 5px;
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

  @media screen and (max-width: ${themeVars.breakpoints.breakpoint768}) {
    height: 250px;
  }

  @media screen and (max-width: ${themeVars.breakpoints.breakpoint576}) {
    height: 200px;
  }

  @media screen and (max-width: ${themeVars.breakpoints.breakpoint420}) {
    height: 150px;
  }

  @media screen and (max-width: ${themeVars.breakpoints.breakpoint320}) {
    height: 130px;
  }
`;

// InfoBlock component
export const InfoBlockStyle = styled.div`
  margin: 20px 0;
  padding: 20px 30px;
  background: ${themeVars.colors.headerBackgroundColor};
  border-radius: 12px;

  .title {
    font-size: 20px;
  }

  .email {
    font-weight: 600;

    span {
      font-weight: 400;
    }
  }

  .password {
    font-weight: 600;

    span {
      font-weight: 400;
    }
  }

  .own__profile {
    &-link {
      color: ${themeVars.colors.blueColor};
      text-decoration: none;
    }
  }

  .github__repo {
    &-link {
      color: ${themeVars.colors.blueColor};
      text-decoration: none;
    }
  }

  .conclusion {
    &-link {
      color: ${themeVars.colors.blueColor};
      text-decoration: none;
    }
  }
`;
