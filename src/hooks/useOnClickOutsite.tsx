import { FC, useEffect, RefObject } from "react";

type CallbackType = (event: MouseEvent) => void;

type UseOnClickOutsiteTypes = {
  ref: RefObject<HTMLElement>;
  callback: CallbackType;
};

export const useOnClickOutsite: FC<UseOnClickOutsiteTypes> = ({
  ref,
  callback,
}) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref?.current || ref?.current.contains(event.target as Node)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, callback]);

  return <></>;
};
