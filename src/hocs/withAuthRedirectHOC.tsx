import { ComponentType, FC } from "react";
import { connect } from "react-redux";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

import { RootState } from "../redux/store";

type MapStateToPropsType = {
  isAuth: boolean;
};

type MapDispatchToPropsType = {};

type OwnPropsType = {};

const mapStateToProps = (state: RootState) =>
  ({
    isAuth: state.authorization.isAuth,
  } as MapStateToPropsType);

export function withAuthRedirectHOC(Component: ComponentType<any>) {
  const AuthRedirectComponent: FC<
    MapStateToPropsType & MapDispatchToPropsType
  > = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    const { isAuth, ...restProps } = props;

    if (!isAuth) return <Navigate to="/login" />;

    return (
      <Component
        location={location}
        navigate={navigate}
        params={params}
        {...restProps}
      />
    );
  };

  const ContainerAuthRedirectComponent = connect<
    MapStateToPropsType,
    MapDispatchToPropsType,
    OwnPropsType,
    RootState
  >(
    mapStateToProps,
    {},
  )(AuthRedirectComponent);

  return ContainerAuthRedirectComponent;
}
