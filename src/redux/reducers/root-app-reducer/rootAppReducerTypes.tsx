import rootAppTypeNames from "../../duck/typesName";

type InitialStateType = {
  initialized: boolean;
  serverError: Object | null;
};

type SetInitializedSuccessRootAppACType = {
  type: typeof rootAppTypeNames.INITIALIZED_SUCCESS_ROOT_APP; // such as "rootApp/duck/INITIALIZED-SUCCESS-ROOT-APP"
};

type SetServerErrorACType = {
  type: typeof rootAppTypeNames.SET_SERVER_ERROR;
  serverError: Object | null;
};

export {
  InitialStateType,
  SetInitializedSuccessRootAppACType,
  SetServerErrorACType,
};
