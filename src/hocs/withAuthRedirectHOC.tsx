import { connect } from "react-redux";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

const mapStateToProps = (state: any) => ({
  isAuth: state.authorization.isAuth,
});

export const withAuthRedirectHOC = (Component: any) => {
  const AuthRedirectComponent = (props: any) => {
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
