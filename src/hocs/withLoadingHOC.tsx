import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { Loader } from "../components/UI/loader/Loader";

const mapStateToProps = (state: any) => {
  return {
    loading: state.profilePage.loading,
  };
};

export const withLoadingHOC = (Component: any) => {
  const LoadingComponent = (props: any) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    if (props.loading === true) return <Loader />;
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  const LoadingComponentContainer = connect(mapStateToProps)(LoadingComponent);

  return LoadingComponentContainer;
};
