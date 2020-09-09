import React, { createContext, useContext, useReducer } from "react";

// prepares the datatlayer
export const StateContext = createContext();

// Wrap our App and provide our data layer to every part of our appp
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//pull informatiion  from thhe data  layer
export const useStateValue = () => useContext(StateContext);
