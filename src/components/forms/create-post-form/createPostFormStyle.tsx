import styled from "styled-components";
import { themeVars } from "../../../utils/vars/themeVars";

// CreatePostForm component
export const CreatePostFormStyle = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TextareaStyle = styled.input`
  max-width: 450px;
  width: 100%;
  background-color: inherit;
  border-radius: 20px;
  color: ${themeVars.colors.whiteColor};
  font-size: 14px;
  font-weight: 500;
  padding: 12px 15px;
  border: none;
  border: 1px solid ${themeVars.colors.whiteColor};
  letter-spacing: 1px;
`;

// CreatePostFormList component
export const CreatePostFormListStyle = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0 5px 0;

  label {
    position: relative;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    transition: all 0.2s ease-in-out;
    border-radius: 5px;
    font-size: 16.5px;
    &:hover {
      background-color: ${themeVars.colors.greyColor};
    }

    input {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      opacity: 0;
      font-size: 0;
      width: 100px;
      height: 45px;
      cursor: pointer;
    }

      i {
          font-size: 25px;
          margin-right: 10px;
        }
    }
  }
`;
