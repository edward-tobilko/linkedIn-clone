import { FC } from "react";

import { ContainerStyle, ContentStyle, HeaderStyle } from "./rootStyles";
import GlobalStyle from "./rootStyles";

import { ContextProvider } from "./context/Context";

import { Header } from "./components/header/Header";
import AppRoutes from "./AppRoutes";

const App: FC = () => {
  // Promise.resolve(10) // створюємо вирішену обіцянку зі значенням 10
  //   .then((e) => console.log(e)) // 1 (записуємо та показуємо в консолі значення 10)
  //   .then((e) => Promise.resolve(e)) // skip or undefined (не отримуємо ніякого значення від попереднього виклику (немає return), тому записує undefined значення.)
  //   .then(console.log) // the same
  //   .then((e) => {
  //     if (!e!) {
  //       throw "Error caught";
  //     }
  //   }) // 3 (Четвертий блок then не отримує ніякого значення, тому що попередній блок нічого не повернув. Тому умовна перевірка if (!e) завжди буде істинною, але цей блок не виконується, тому що йому не передано жодного значення.)
  //   .catch((e) => {
  //     console.log(e);
  //     return new Error("New error");
  //   }) // 2 (Блок catch спрацьовує завдяки створеній помилці "Error caught" у 4-му then. Він реєструє "Виникла помилка" і повертає новий об'єкт Error з повідомленням "Нова помилка".)
  //   .then((e) => console.log(e?.message)) // 4 (цей блок then отримує об'єкт Error і записує його повідомлення "Нова помилка".)
  //   .catch((e) => console.log(e.message)); // 5 (цей блок catch не виконується, оскільки у попередньому ланцюжку немає помилок.)

  return (
    <>
      <GlobalStyle />

      <ContextProvider>
        <HeaderStyle>
          <ContainerStyle>
            <Header />
          </ContainerStyle>
        </HeaderStyle>

        <ContainerStyle>
          <ContentStyle>
            <AppRoutes />
          </ContentStyle>
        </ContainerStyle>
      </ContextProvider>
    </>
  );
};

export default App;
