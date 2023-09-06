import { FC, useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import { SettingStyle } from "./settingStyle";

import { withAuthRedirectHOC } from "../../hocs/withAuthRedirectHOC";
import { useTypeDispatch } from "../../hooks/useTypeSelector";

import { updateProfilePageTC } from "../../redux/reducers/setting-reducer/settingReducer";

const Setting: FC = () => {
  const dispatch = useTypeDispatch();

  useEffect(() => {
    dispatch(updateProfilePageTC("hello"));
  }, [dispatch]);

  return (
    <SettingStyle>
      <div className="about__header">
        <h1 className="about__header-title">
          Change the section about yourself
        </h1>
      </div>
    </SettingStyle>
  );
};

export default compose(
  connect(null, {
    // Санка для оновлення інформації про користувача
    updateProfilePageTC,
  }),

  // HOC для перенаправлення сторінки на <NotFound />, якщо користувач не зареєстрований
  withAuthRedirectHOC,
)(Setting);
