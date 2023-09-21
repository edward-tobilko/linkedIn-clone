import React, { FC, useEffect } from "react";
import { connect } from "react-redux";

import { StatusFieldErrorStyle, StatusStyle } from "./statusStyle";

import { IMapDispatchToProps, IOwnProps, IStatusProps } from "./statusTypes";

import { useTypeDispatch } from "../../../hooks/useTypeSelector";

import { setServerErrorTC } from "../../../redux/reducers/root-app-reducer/rootAppReducer";
import { updateUserStatusTC } from "../../../redux/reducers/profile-reducer/profileReducer";
import { RootState } from "../../../redux/store";

import { serverErrorSelector } from "../../../utils/selectors/rootSelectors";
import {
  currentProfilePageSelector,
  statusSelector,
} from "../../../utils/selectors/profileSelectors";

import StatusField from "./StatusField";

const mapStateToProps = (state: RootState): IStatusProps => {
  return {
    serverError: serverErrorSelector(state),
    status: statusSelector(state),
    currentProfilePage: currentProfilePageSelector(state),
  };
};

const StatusContainer: FC<IStatusProps> = ({
  serverError,
  status,
  currentProfilePage,
}) => {
  const [statusValue, setStatusValue] = React.useState(status);
  const [editMode, setEditMode] = React.useState(false);
  const [validationError, setValidationError] = React.useState("");

  const maxStatusLength = 100; // Maximum status length

  const dispatch = useTypeDispatch();

  const updateInputStatus = () => {
    if (statusValue.length > maxStatusLength) {
      setValidationError(
        `Status is too long. Maximum length is ${maxStatusLength} characters.`,
      );
      return;
    }

    setValidationError("");
    setEditMode(false);
    dispatch(updateUserStatusTC(statusValue));
  };

  useEffect(() => {
    setStatusValue(status); //? потрібен для відображення статусу при багато-разовому перезавантаження сторінки (тобто, при перезавантаження сторіки перший хук useEffect спрацює в комп. ProfileContent, а після тут)
  }, [status]);

  useEffect(() => {
    const handleServerError = (error: Object) => {
      if (serverError) {
        dispatch(setServerErrorTC(error));
      }
    };

    // Register the server error handler
    window.addEventListener("error", handleServerError);

    return () => {
      // Unregister the server error handler when the component unmounts
      window.removeEventListener("error", handleServerError);
    };
  }, [serverError, dispatch]);

  return (
    <>
      <StatusStyle>
        {!editMode ? (
          <>
            {currentProfilePage?.userId === 29793 ? (
              <>
                <div
                  className="status__name"
                  onDoubleClick={() => setEditMode(true)}
                >
                  {!status ? (
                    <p className="status__empty">No status</p>
                  ) : (
                    status
                  )}
                </div>
                <div className="status__tooltip tooltip__active">
                  If you want to change your status, double-click here!
                </div>
              </>
            ) : (
              <>
                {!status ? <p className="status__empty">No status</p> : status}
              </>
            )}
          </>
        ) : (
          <>
            <StatusField
              updateInputStatus={updateInputStatus}
              statusValue={statusValue}
              setStatusValue={setStatusValue}
            />

            {validationError && (
              <StatusFieldErrorStyle> {validationError} </StatusFieldErrorStyle>
            )}
          </>
        )}
      </StatusStyle>
    </>
  );
};

export default connect<IStatusProps, IMapDispatchToProps, IOwnProps, RootState>(
  mapStateToProps,
  {
    updateUserStatusTC,
    setServerErrorTC,
  },
)(StatusContainer);
