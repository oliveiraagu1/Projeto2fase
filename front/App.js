import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import StackRoutes from './src/Routes/Stack';
import ContextProvider from './src/Context/Contex';

const App = () => {
  return (
    <ContextProvider>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </ContextProvider>
  );
}

export default App;

