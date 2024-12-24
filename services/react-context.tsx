import React, { createContext, useContext, useReducer } from "react";

// Define the shape of your state
interface ReactCountState {
  reactCount: number;
}

// Define action types
type ReactCountAction = { type: "increment" } | { type: "decrement" };

// Define the reducer function
const reactCountReducer = (
  state: ReactCountState,
  action: ReactCountAction
): ReactCountState => {
  switch (action.type) {
    case "increment":
      return { reactCount: state.reactCount + 1 };
    case "decrement":
      return { reactCount: state.reactCount - 1 };
    default:
      throw new Error(`Unknown action type: ${action}`);
  }
};

// Create the context
const ReactCountContext = createContext<{
  state: ReactCountState;
  dispatch: React.Dispatch<ReactCountAction>;
} | null>(null);

// Create the provider
export const ReactCountProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reactCountReducer, { reactCount: 0 });

  return (
    <ReactCountContext.Provider value={{ state, dispatch }}>
      {children}
    </ReactCountContext.Provider>
  );
};

// Custom hook for using the context
export const useReactCount = () => {
  const context = useContext(ReactCountContext);
  if (!context) {
    throw new Error("useReactCount must be used within a ReactCountProvider");
  }
  return context;
};
