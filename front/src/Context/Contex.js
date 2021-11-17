import React, {createContext, useContext, useState} from 'react';

const ContextUsuario = createContext();

const ContextProvider = ({children})=> {

    return(
        <ContextUsuario.Provider
            value={{

            }}
        >{children}</ContextUsuario.Provider>
    )
}

export const VerNome = () => {
    const context = useContext(ContextUsuario);
    const {} = context;
    return {}; 
}

export default ContextProvider;