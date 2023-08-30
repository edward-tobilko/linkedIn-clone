import { FC } from "react";

const StatusField: FC<any> = ({
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
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setStatusValue(e.currentTarget.value)
        }
        onBlur={updateInputStatus}
        autoFocus={true}
        onFocus={(e) => e.target.select()} // автозаповнення внутрішнього вмісту інпута (синій колір)
      />
    </>
  );
};

export default StatusField;
