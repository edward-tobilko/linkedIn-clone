import { FC } from "react";
import { compose } from "redux";

import { withAuthRedirectHOC } from "../../hocs/withAuthRedirectHOC";

const Setting: FC = () => {
  return <div>Setting</div>;
};

export default compose(
  // HOC для перенаправлення сторінки на <NotFound />, якщо користувач не зареєстрований
  withAuthRedirectHOC,
)(Setting);
