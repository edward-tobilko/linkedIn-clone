import styled from "styled-components";

export const ToDoListsStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;

  .error__input {
    border: 1px solid red;
  }

  .error {
    position: absolute;
    top: 105px;
    left: 50%;
    transform: translateX(-50%);

    color: red;
    width: 200px;
    text-align: center;
    font-size: 15px;
  }

  .tasks {
    padding-top: 25px;

    .task {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px;
    }

    .isDone {
      opacity: 0.6;
    }
  }

  .filtered {
    text-align: center;
    padding-top: 20px;

    &__btn {
      margin: 0 10px;
    }

    .active {
      background: aquamarine;
    }
  }
`;

export const ToDoListStyle = styled.div`
  margin: 0 30px;
  position: relative;
  max-width: 350px;
  width: 100%;
  text-align: center;

  .title {
    text-align: center;
    font-size: 23px;
    padding: 10px 0;
  }

  .form {
    text-align: center;
  }
`;
