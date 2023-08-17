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

const mapStateToProps = (state: RootState) => ({
  isAuth: state.authorization.isAuth,
});

export const withAuthRedirectHOC = (Component: any) => {
  const AuthRedirectComponent = (props: AuthRedirectComponentProps) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    if (props.isAuth === false) return <Navigate to={"/not-found"} />;

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
