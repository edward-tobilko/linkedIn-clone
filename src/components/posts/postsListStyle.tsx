import styled from "styled-components";
import { themeVars } from "../../themeVars";

// PostsList component
export const PostsListStyle = styled.div`
  margin: 25px 0;
`;

// PostsItem component
export const PostsItemStyle = styled.div`
  margin-bottom: 15px;
  background: ${themeVars.colors.headerBackgroundColor};
  border-radius: 10px;
  padding: 20px 10px;
`;

export const PostsItemDescriptionStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const PostsItemAboutStyle = styled.div`
  padding-left: 10px;
  h2 {
    font-weight: 600;
    font-size: 15px;
    span {
      color: ${themeVars.colors.lightGreyColor};
      padding-left: 5px;
      font-size: 13px;
    }
  }
  p {
    font-size: 12px;
    color: ${themeVars.colors.lightGreyColor};
  }
`;

export const PostsItemAddressStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2 {
    font-size: 15px;
  }
  p {
    font-size: 14px;
    color: ${themeVars.colors.whiteColor};
  }
`;

export const PostsItemComments = styled.div`
  padding-top: 15px;
`;
