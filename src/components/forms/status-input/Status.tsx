import React, { FC, useEffect } from "react";

import { StatusStyle } from "./statusStyle";

import { useTypeDispatch } from "../../../hooks/useTypeSelector";

import { StatusProps } from "./statusTypes";

const Status: FC<StatusProps> = ({
  status,
  updateUserStatusTC,
  currentProfilePage,
}) => {
  const [statusValue, setStatusValue] = React.useState(status);
  const [editMode, setEditMode] = React.useState(false);

  const dispatch = useTypeDispatch();

  const updateInputStatus = () => {
    setEditMode(false);
    dispatch(updateUserStatusTC(statusValue));
  };

  useEffect(() => {
    setStatusValue(status); //? потрібен для відображення статусу при багато-разовому перезавантаження сторінки (тобто, при перезавантаження сторіки перший хук useEffect спрацює в комп. ProfileContent, а після тут)
  }, [status]);

  return (
    <>
      <StatusStyle>
        {!editMode ? (
          <>
            {currentProfilePage.userId === 29793 ? (
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
          <input
            type="text"
            placeholder="Add new status..."
            value={statusValue}
            onChange={(e) => setStatusValue(e.currentTarget.value)}
            onBlur={updateInputStatus}
            autoFocus={true}
            onFocus={(e) => e.target.select()} // автозаповнення внутрішнього вмісту інпута (синій колір)
          />
        )}
      </StatusStyle>
    </>
  );
};

export default Status;
