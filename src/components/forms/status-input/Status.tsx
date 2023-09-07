import React, { FC, useEffect } from "react";

import { StatusFieldErrorStyle, StatusStyle } from "./statusStyle";

import { useTypeDispatch } from "../../../hooks/useTypeSelector";
import StatusField from "./StatusField";

import { StatusProps } from "./statusTypes";

const Status: FC<StatusProps> = ({
  status,
  updateUserStatusTC,
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
    dispatch(updateUserStatusTC?.(statusValue));
  };

  useEffect(() => {
    setStatusValue(status); //? потрібен для відображення статусу при багато-разовому перезавантаження сторінки (тобто, при перезавантаження сторіки перший хук useEffect спрацює в комп. ProfileContent, а після тут)
  }, [status]);

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

export default Status;
