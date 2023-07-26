import { FC } from "react";
import { connect } from "react-redux";

import { AvatarImgStyle } from "../../rootStyles";
import { CardSocialUserStyle, RemoveCardSocialUserStyle } from "./socialStyle";

import { FollowBtn } from "../../components/UI/btns/followBtn/FollowBtn";

import { useTypeSelector } from "../../hooks/useTypeSelector";

import {
  followUserAC,
  unFollowUserAC,
  setUsersAC,
} from "../../redux/reducers/socialReducer";

// Container component
const mapState = (state: any) => {
  return {
    socialUsers: state.socialPage.socialUsers,
  };
};

const mapDispatch = (dispatch: any) => {
  return {
    // Додаємо користувача
    followDispatch(userId: any) {
      dispatch(followUserAC(userId));
    },

    // Видаляємо користувача
    unFollowDispatch(userId: any) {
      dispatch(unFollowUserAC(userId));
    },

    // Встановлюємо (відображаємо) користувачів в стейт (на сторінці)
    setUsersDispatch(newUsers: any) {
      dispatch(setUsersAC(newUsers));
    },
  };
};

const CardSocialUserContainer = connect(mapState, mapDispatch);

// Pure component
const CardSocialUser: FC = () => {
  const { socialUsers } = useTypeSelector((state) => state.socialPage);

  return (
    <>
      {socialUsers.map((socialUser: any) => (
        <CardSocialUserStyle key={socialUser.id}>
          <div className="cardSocial">
            <img
              src={socialUser.wrapper}
              alt="Wrapper"
              className="cardSocial__wrapper"
            />
            <div className="cardSocial__desc">
              <AvatarImgStyle
                src={socialUser.img}
                alt="Avatar"
                width="90px"
                height="90px"
              />
              <h1> {socialUser.fullName} </h1>
              <p> {socialUser.status} </p>

              <div className="cardSocial__desc-location">
                <img src="./svg/world_icon.svg" alt="World-icon" />
                <div className="cardSocial__desc-location-names">
                  <p> {socialUser.location.country} / </p>
                  <p> {socialUser.location.city} </p>
                </div>
              </div>

              <FollowBtn socialUser={socialUser} />

              <RemoveCardSocialUserStyle>
                <img src="./svg/remove_icon.svg" alt="Remove-icon" />
              </RemoveCardSocialUserStyle>
            </div>
          </div>
        </CardSocialUserStyle>
      ))}
    </>
  );
};

export default CardSocialUserContainer(CardSocialUser);
