import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Quiz from '../Screens/Quiz';

const MainStack = createStackNavigator();

const Navigator = () => (
  <NavigationContainer>
    <MainStack.Navigator>
      <MainStack.Screen name="Quiz" component={Quiz} />
    </MainStack.Navigator>
  </NavigationContainer>
);

export default Navigator;
