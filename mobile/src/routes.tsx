// In App.js in a new project

import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
import Home from './pages/Home'
import Detail from './pages/Detail'
import Points from './pages/Points'

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{ 
          cardStyle : {
            backgroundColor:'#F0F0F5'
          }
         }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Points" component={Points} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;