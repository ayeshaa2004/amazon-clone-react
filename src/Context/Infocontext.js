import React, { createContext, useContext, useState } from "react";
export const Infocontext = createContext();

export function InfoProvider({ children }) {
  const [total, setTotal] = useState(0);

  return (
    <Infocontext.Provider value={{ total, setTotal }}>
      {children}
    </Infocontext.Provider>
  );
}

export const useStateValuee = () => useContext(Infocontext);
