import styled from "styled-components";

export const HeaderStyle = styled.header`
  min-height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export const HeaderLeftStyle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  .bx-search {
    position: absolute;
    top: 50%;
    left: 50px;
    transform: translateY(-50%);
  }
  .bxs-id-card {
    font-size: 35px;
    padding-right: 10px;
  }
`;

export const HeaderCenterStyle = styled.div`
  ul {
    display: inline-flex;
    a {
      text-align: center;
      padding: 0 15px;
      text-decoration: none;
      color: var(--whiteColor);

      &:hover {
        cursor: pointer;
        filter: brightness(80%);
      }
      i {
        font-size: 22px;
      }
    }
  }
`;

export const HeaderRightStyle = styled.div`
  display: inline-flex;
  align-items: center;

  p {
    color: var(--lightGreyColor);
    padding: 0 15px;
  }
`;

export const LogOutStyle = styled.button`
  color: var(--whiteColor);
  background: inherit;
  border: none;
  cursor: pointer;

  transition: color 0.2s ease-in-out;

  &:hover {
    color: var(--orangeColor);
  }
`;
