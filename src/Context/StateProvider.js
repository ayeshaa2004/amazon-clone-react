import React, { createContext, useContext, useReducer, useEffect } from "react";

export const StateContext = createContext();

// export const StateProvider = ({ reducer, initialState, children }) => (
//   <StateContext.Provider value={useReducer(reducer, initialState)}>
//     {children}
//   </StateContext.Provider>
// );

export const StateProvider = ({ reducer, initialState, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(state.basket));
  }, [state.basket]);

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
};
export const useStateValue = () => useContext(StateContext);

// difference between these two is
//firstly we were just directly passing the reducer result to the provider..
//we didnt have the access to it...because we didnt store it in a variable
//but in this syntax we have stored it...we can make use of state and add extra logic
