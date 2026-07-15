import { useId, useLayoutEffect, useSyncExternalStore } from "react";

let openDrawerStack: string[] = [];
const listeners = new Set<() => void>();

const subscribe = (listener: () => void): (() => void) => {
  listeners.add(listener);

  return (): void => {
    listeners.delete(listener);
  };
};

const notifyDrawerStackListeners = (): void => {
  listeners.forEach((listener) => listener());
};

const getIsBottomMostOpenDrawer = (key: string, isOpen: boolean): boolean => {
  return isOpen && openDrawerStack[0] === key;
};

/**
 * Tracks open drawers globally so only the bottom-most drawer renders the visible backdrop.
 * Uses open order and `useSyncExternalStore` for tear-free reads.
 */
export const useDrawerStackPosition = (isOpen: boolean): { isBottomMostOpenDrawer: boolean } => {
  const key = useId();

  useLayoutEffect(() => {
    if (!isOpen) return;

    openDrawerStack.push(key);
    notifyDrawerStackListeners();

    return (): void => {
      openDrawerStack = openDrawerStack.filter((stackKey) => stackKey !== key);
      notifyDrawerStackListeners();
    };
  }, [isOpen, key]);

  const isBottomMostOpenDrawer = useSyncExternalStore(
    subscribe,
    () => getIsBottomMostOpenDrawer(key, isOpen),
    () => false,
  );

  return { isBottomMostOpenDrawer };
};
