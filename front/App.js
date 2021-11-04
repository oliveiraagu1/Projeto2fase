import React from 'react';

import {NavigationContainer} from '@react-navigation/native'
import StackRoutes from './src/Routes/Stack';

const App = () => {
  return (

    <NavigationContainer>
      <StackRoutes/>
    </NavigationContainer>
    
  );
}

export default App;

