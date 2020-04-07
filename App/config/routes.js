import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Quiz from '../Screens/Quiz';
import QuizIndex from '../Screens/QuizIndex';
import Summery from '../Screens/Summery';

const MainStack = createStackNavigator();

const Navigator = () => (
  <NavigationContainer>
    <MainStack.Navigator initialRouteName="QuizIndex">
      <MainStack.Screen
        name="Quiz"
        component={Quiz}
        options={({route}) => ({
          title: route.params.title,
          headerStyle: {backgroundColor: route.params.color},
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      />
      <MainStack.Screen
        name="QuizIndex"
        component={QuizIndex}
        options={{title: 'Quizzes'}}
      />
      <MainStack.Screen
        name="Summery"
        component={Summery}
        options={({route}) => ({
          title: 'Quiz Summery',
          headerStyle: {backgroundColor: route.params.color},
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      />
    </MainStack.Navigator>
  </NavigationContainer>
);

export default Navigator;
