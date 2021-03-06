import React, { createContext, useContext, useState } from "react";

const ContextUsuario = createContext();

const ContextProvider = ({ children }) => {
  const [dadosUser, setDadosUser] = useState({
    email: "",
    name: "",
    id: ""
  });
  
  const [url, setUrl] = useState("");
  const [regiao, setRegiao] = useState("");
  

  return (
    <ContextUsuario.Provider
      value={{
        dadosUser,
        setDadosUser,
        url,
        setUrl,
        regiao,
        setRegiao,
      }}
    >
      {children}
    </ContextUsuario.Provider>
  );
};

export const DadosUsers = () => {
  const context = useContext(ContextUsuario);
  const { dadosUser, setDadosUser, url, setUrl, regiao, setRegiao } = context;
  return { dadosUser, setDadosUser, url, setUrl, regiao, setRegiao };
};

export default ContextProvider;
