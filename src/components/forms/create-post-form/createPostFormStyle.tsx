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

  @media screen and (max-width: ${themeVars.breakpoints.breakpoint1200}) {
    max-width: 350px;
  }

  @media screen and (max-width: ${themeVars.breakpoints.breakpoint768}) {
    max-width: 250px;
  }

  @media screen and (max-width: ${themeVars.breakpoints.breakpoint576}) {
    max-width: 150px;
    padding: 7px 10px;
    font-size: 12px;
  }
`;

// CreatePostFormList component
export const CreatePostFormListStyle = styled.ul`
  display: flex;
  justify-content: space-around;
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

  @media screen and (max-width: ${themeVars.breakpoints.breakpoint576}) {
    label {
      padding: 5px;
      font-size: 14.5px;

      i {
        font-size: 20px;
        margin-right: 5px;
      }

      span {
        font-size: 12px;
      }
    }
  }

  @media screen and (max-width: ${themeVars.breakpoints.breakpoint420}) {
    flex-wrap: wrap;
  }
`;
