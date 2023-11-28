import styled from "styled-components";

import { RemoveBtn } from "./RemoveBtn";
import { themeVars } from "../../../../utils/vars/themeVars";

export const SocialUsersItemRemoveBtn = styled(RemoveBtn)`
  position: absolute;
  top: 0;
  right: 5px;
  z-index: 1;

  background-color: transparent;
  border: none;
  opacity: 0.7;

  img {
    width: 25px;
    height: 25px;
  }

  &:hover {
    opacity: 1;
  }
`;

export const DropdownContentRemoveBtn = styled(RemoveBtn)`
  position: absolute;
  top: 50%;
  right: 0;
  z-index: 1;

  background: transparent;
  border: none;
  opacity: 0.7;
  transform: translateY(-50%);

  &:hover {
    opacity: 1;
  }
`;

export const EditModeRemoveBtn = styled(RemoveBtn)`
  position: absolute;
  top: 6%;
  right: 10px;
  z-index: 1;

  background: transparent;
  border: none;
  opacity: 0.7;
  transform: translateY(-50%);

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: ${themeVars.breakpoints.breakpoint576}) {
    top: 4%;
  }
`;
