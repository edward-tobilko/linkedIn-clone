import { FC, useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { StatusStyle } from "./statusStyle";
import { Loader } from "../../UI/loader/Loader";

export const Status: FC<any> = ({ status, updateUserStatusTC, loading }) => {
  const [statusValue, setStatusValue] = useState(status);
  const [editMode, setEditMode] = useState(false);
  console.log(statusValue);

  const dispatch: any = useDispatch();

  const updateInputStatus = () => {
    setEditMode(false);
    dispatch(updateUserStatusTC(status));
  };

  useEffect(() => {
    setStatusValue(status);
  }, [status]);

  return (
    <>
      {loading && <Loader />}

      <StatusStyle>
        {!editMode ? (
          <>
            {status?.length > 0 ? (
              <>
                <p
                  className="status__name"
                  onDoubleClick={() => setEditMode(true)}
                >
                  {status}
                </p>
                <div className="status__tooltip tooltip__active">
                  If you want to change your status, double-click here!
                </div>
              </>
            ) : (
              <p className="status__empty">No status</p>
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
            onFocus={(e) => e.target.select()}
          />
        )}
      </StatusStyle>
    </>
  );
};
