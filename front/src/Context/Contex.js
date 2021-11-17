import React, { createContext, useContext, useState } from "react";

const ContextUsuario = createContext();

const ContextProvider = ({ children }) => {
  const [dadosUser, setDadosUser] = useState({
    email: "",
    name: "",
    id: ""
  });
  

  return (
    <ContextUsuario.Provider
      value={{
        dadosUser,
        setDadosUser
      }}
    >
      {children}
    </ContextUsuario.Provider>
  );
};

export const DadosUsers = () => {
  const context = useContext(ContextUsuario);
  const { dadosUser, setDadosUser } = context;
  return { dadosUser, setDadosUser };
};

export default ContextProvider;
