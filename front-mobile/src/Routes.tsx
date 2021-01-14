import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Orders from './pages/Orders';

const { Navigator, Screen } = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Navigator headerMode="none" screenOptions={{ 
        cardStyle: { 
          backgroundColor: '#FFFFFF',
        },
      }}>
        <Screen name="Home" component={Home} />
        <Screen name="Orders" component={Orders} />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;
