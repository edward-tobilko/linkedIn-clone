import { ComponentType, FC } from "react";
import { connect } from "react-redux";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

import { RootState } from "../redux/store";

type AuthRedirectComponentProps = {
  isAuth: boolean;
};

type WrappedComponentProps = {
  location: any;
  navigate: any;
  params: any;
};

const mapStateToProps = (state: RootState) => ({
  isAuth: state.authorization.isAuth,
});

export const withAuthRedirectHOC = (Component: ComponentType<any>) => {
  const AuthRedirectComponent: FC<AuthRedirectComponentProps> = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    if (!props.isAuth) return <Navigate to="/login" />;

    return (
      <Component
        {...props}
        location={location}
        navigate={navigate}
        params={params}
      />
    );
  };

  const ContainerAuthRedirectComponent = connect(mapStateToProps)(
    AuthRedirectComponent,
  );

  return ContainerAuthRedirectComponent;
};
