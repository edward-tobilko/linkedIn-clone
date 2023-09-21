import { FC, ChangeEvent } from "react";

import { IStatusFieldProps } from "./statusTypes";

const StatusField: FC<IStatusFieldProps> = ({
  updateInputStatus,
  statusValue,
  setStatusValue,
}) => {
  return (
    <>
      <input
        type="text"
        placeholder="Add new status..."
        value={statusValue}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setStatusValue(event.currentTarget.value)
        }
        onBlur={updateInputStatus}
        autoFocus={true}
        onFocus={(e) => e.target.select()} //? автозаповнення внутрішнього вмісту інпута (синій колір)
      />
    </>
  );
};

export default StatusField;
