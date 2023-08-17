import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { Loader } from "../components/UI/loader/Loader";

import { RootState } from "../redux/store";

type LoadingComponentProps = {
  loading: boolean;
};

const mapStateToProps = (state: RootState | any) => {
  return {
    loading: state.profilePage.loading,
  };
};

export const withLoadingHOC = (Component: any) => {
  const LoadingComponent = (props: LoadingComponentProps) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    if (props.loading === true) return <Loader />;
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  const LoadingComponentContainer = connect(mapStateToProps)(LoadingComponent);

  return LoadingComponentContainer;
};
