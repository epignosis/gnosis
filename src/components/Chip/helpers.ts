import { MutableRefObject, useLayoutEffect, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useIsOverflowX = (overflowRef: MutableRefObject<any>): boolean => {
  const [isOverflow, setIsOverflow] = useState<boolean>(false);

  useLayoutEffect(() => {
    const el = overflowRef.current;

    const trigger = (): void => {
      setIsOverflow(el.offsetWidth < el.scrollWidth);
    };

    if (el) {
      if ("ResizeObserver" in window) {
        new ResizeObserver(trigger).observe(el);
      }

      trigger();
    }
  }, [overflowRef]);

  return isOverflow;
};
