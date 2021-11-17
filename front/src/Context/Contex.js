import React, { createContext, useContext, useState } from "react";

const ContextUsuario = createContext();

const ContextProvider = ({ children }) => {
  const [emailContext, setEmailContext] = useState("");
  const [nameContext, setNameContext] = useState("");

  return (
    <ContextUsuario.Provider
      value={{
        emailContext,
        setEmailContext,
        nameContext,
        setNameContext,
      }}
    >
      {children}
    </ContextUsuario.Provider>
  );
};

export const DadosUsers = () => {
  const context = useContext(ContextUsuario);
  const { emailContext, setEmailContext, nameContext, setNameContext } =
    context;
  return { emailContext, setEmailContext, nameContext, setNameContext };
};

export default ContextProvider;
