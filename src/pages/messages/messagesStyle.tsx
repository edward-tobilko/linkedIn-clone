import styled from "styled-components";
import { themeVars } from "../../utils/vars/themeVars";

export const MessagesStyle = styled.div`
  background: ${themeVars.colors.headerBackgroundColor};
  width: 100%;
  padding: 30px;

  .messages {
    display: flex;
  }
`;
