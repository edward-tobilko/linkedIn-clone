import styled from "styled-components";

import { themeVars } from "../../utils/vars/themeVars";

// Sidebar component
export const SidebarStyle = styled.aside`
  max-width: 280px;
  width: 100%;

  .sidebar {
    position: relative;

    &-followers {
      background-color: ${themeVars.colors.headerBackgroundColor};
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 60px 0;

      &:before {
        content: "";
        width: 100%;
        height: 1px;
        background-color: ${themeVars.colors.lightGreyColor};
        opacity: 0.5;
        position: absolute;
        left: 0;
        top: 50%;
      }

      &:after {
        content: "";
        width: 100%;
        height: 1px;
        background-color: ${themeVars.colors.lightGreyColor};
        opacity: 0.5;
        position: absolute;
        left: 0;
        bottom: 30%;
      }

      p {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 7px 0;
        font-size: 14px;
        cursor: pointer;
        width: 100%;
        transition: all 0.2s ease-in-out;

        span {
          padding-left: 7px;
        }

        &:hover {
          background-color: ${themeVars.colors.lightGreyColor};
          opacity: 0.7;
        }
      }
    }

    &-elements {
      background-color: ${themeVars.colors.headerBackgroundColor};

      &__time {
        position: relative;
        padding-bottom: 25px;
        display: flex;
        justify-content: space-around;

        &:after {
          content: "";
          width: 100%;
          height: 1px;
          background-color: ${themeVars.colors.lightGreyColor};
          opacity: 0.5;
          position: absolute;
          left: 0;
          bottom: 0;
        }

        .button {
          --width: 100px;
          --height: 35px;
          --tooltip-height: 35px;
          --tooltip-width: 120px;
          --gap-between-tooltip-to-button: 12px;
          --button-color: #1b415f;
          --tooltip-color: #ffffff;
          width: var(--width);
          height: var(--height);
          background: var(--button-color);
          position: relative;
          text-align: center;
          border-radius: 0.45em;
          transition: background 0.3s;
        }

        .button::before {
          position: absolute;
          content: attr(data-tooltip);
          width: var(--tooltip-width);
          height: var(--tooltip-height);
          background-color: #555;
          font-size: 13px;
          color: #ffffff;
          border-radius: 0.25em;
          line-height: var(--tooltip-height);
          bottom: calc(
            var(--height) + var(--gap-between-tooltip-to-button) + 10px
          );
          left: calc(50% - var(--tooltip-width) / 2);
        }

        .button::after {
          position: absolute;
          content: "";
          width: 0;
          height: 0;
          border: 10px solid transparent;
          border-top-color: #555;
          left: calc(50% - 10px);
          bottom: calc(100% + var(--gap-between-tooltip-to-button) - 10px);
        }

        .button::after,
        .button::before {
          opacity: 0;
          visibility: hidden;
          transition: all 0.5s;
        }

        .text {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .button-wrapper,
        .text,
        .icon {
          overflow: hidden;
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          color: #ffffff;
        }

        .text {
          top: 0;
        }

        .text,
        .icon {
          transition: top 0.5s;
        }

        .icon {
          color: #ffffff;
          top: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon svg {
          width: 24px;
          height: 24px;
        }

        .button:hover {
          background: #1d2226;
        }

        .button:hover .text {
          top: -100%;
        }

        .button:hover .icon {
          top: 0;
        }

        .button:hover:before,
        .button:hover:after {
          opacity: 1;
          visibility: visible;
        }

        .button:hover:after {
          bottom: calc(
            var(--height) + var(--gap-between-tooltip-to-button) - 20px
          );
        }

        .button:hover:before {
          bottom: calc(var(--height) + var(--gap-between-tooltip-to-button));
        }
      }

      &__action {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 50px;
        cursor: pointer;
        transition: all 0.2s ease-in-out;

        span {
          font-size: 14px;
          padding-left: 5px;
        }

        &:hover {
          background-color: ${themeVars.colors.lightGreyColor};
          opacity: 0.7;
        }
      }
    }
  }
`;

// Contacts component
export const ContactsStyle = styled.div`
  width: 100%;

  .title {
    font-size: 20px;
    padding-bottom: 10px;
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
  }
`;
