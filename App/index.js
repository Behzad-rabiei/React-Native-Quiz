import React from 'react';
import {Provider} from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import store from './config/store';
import Home from './Screens/Quiz';

EStyleSheet.build({
  $deepskyblue: '#00bfff',
  $white: '#ffffff',
  $answer: 'rgba(255,255,255,.3)',
  $orangered: '#ff4500',
  $limegreen: '#32cd32',
});

export default () => (
  <Provider store={store}>
    <Home />
  </Provider>
);
