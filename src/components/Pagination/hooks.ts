import { RefObject, useEffect } from "react";

type Handler = (event: MouseEvent) => void;

// Improved version of https://usehooks.com/useOnClickOutside/
const useClickOutside = (ref: RefObject<HTMLElement>, handler: Handler): void => {
  useEffect(() => {
    let startedInside = false;
    let startedWhenMounted = false;

    const listener = (event: MouseEvent): void => {
      // Do nothing if `mousedown` or `touchstart` started inside ref element
      if (startedInside || !startedWhenMounted) return;
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target as Node)) return;

      handler(event);
    };

    const validateEventStart = (event: TouchEvent | MouseEvent): void => {
      startedWhenMounted = Boolean(ref.current);
      startedInside = Boolean(ref.current && ref.current.contains(event?.target as Node));
    };

    document.addEventListener("mousedown", validateEventStart);
    document.addEventListener("touchstart", validateEventStart);
    document.addEventListener("click", listener);

    return (): void => {
      document.removeEventListener("mousedown", validateEventStart);
      document.removeEventListener("touchstart", validateEventStart);
      document.removeEventListener("click", listener);
    };
  }, [ref, handler]);
};

export default useClickOutside;
