import React, {createContext, useContext, useState} from 'react';

const ContextUsuario = createContext();

const ContextProvider = ({children})=> {

    const [dados, setDados] = useState('');

    return(
        <ContextUsuario.Provider
            value={{
                dados,
                setDados
            }}
        >{children}</ContextUsuario.Provider>
    )
}

export const DadosUsers = () => {
    const context = useContext(ContextUsuario);
    const {dados, setDados} = context;
    return {dados, setDados}; 
}

export default ContextProvider;