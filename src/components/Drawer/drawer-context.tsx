import React, { createContext, useContext, useReducer, ReactNode } from "react";

type State = { showMask: boolean; drawers: { id: string; isOpen: boolean }[] };
type Action = { type: "open"; id: string } | { type: "close"; id: string };
type Dispatch = (action: Action) => void;
type DrawerProviderProps = { children: ReactNode };
type DrawerContext = { state: State; dispatch: Dispatch };

const DrawersStateContext = createContext<DrawerContext | null>(null);

const INITIAL_STATE = {
  drawers: [],
  showMask: false,
};

const drawersReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "open":
      return {
        showMask: true,
        drawers: [
          ...state.drawers,
          {
            id: action.id,
            isOpen: true,
          },
        ],
      };
    case "close": {
      const drawers = state.drawers.filter(({ id }) => id !== action.id);
      const showMask = drawers.reduce((acc, val) => {
        if (acc) return true;
        if (val.isOpen) return true;
        return false;
      }, false);

      return {
        drawers,
        showMask,
      };
    }
    default:
      return INITIAL_STATE;
  }
};

const DrawerProvider = ({ children }: DrawerProviderProps): JSX.Element => {
  const [state, dispatch] = useReducer(drawersReducer, INITIAL_STATE);

  return (
    <DrawersStateContext.Provider value={{ state, dispatch }}>
      {children}
    </DrawersStateContext.Provider>
  );
};

const useDrawersContext = (): DrawerContext => {
  const context = useContext(DrawersStateContext);

  if (!context) throw new Error("`useDrawersContext` must be used within a DrawerProvider");

  return context;
};

export { DrawerProvider, useDrawersContext };
