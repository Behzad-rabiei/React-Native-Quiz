import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Quiz from '../Screens/Quiz';
import QuizIndex from '../Screens/QuizIndex';

const MainStack = createStackNavigator();

const Navigator = () => (
  <NavigationContainer>
    <MainStack.Navigator initialRouteName="QuizIndex">
      <MainStack.Screen
        name="Quiz"
        component={Quiz}
        options={({route}) => ({title: route.params.title})}
      />
      <MainStack.Screen
        name="QuizIndex"
        component={QuizIndex}
        options={{title: 'Quizzes'}}
      />
    </MainStack.Navigator>
  </NavigationContainer>
);

export default Navigator;
