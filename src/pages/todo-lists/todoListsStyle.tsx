import styled from "styled-components";

export const ToDoListsStyle = styled.div`
  max-width: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;

  .tasks {
    padding-top: 20px;

    .task {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px;
    }
  }

  .filtered {
    text-align: center;
    padding-top: 20px;

    &__btn {
      margin: 0 10px;
    }
  }
`;
