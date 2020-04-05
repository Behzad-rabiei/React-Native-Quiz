import React from 'react';
import {Provider} from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import store from './config/store';
import Navigator from './config/routes';

EStyleSheet.build({
  $deepskyblue: '#00bfff',
  $white: '#ffffff',
  $opacity: 'rgba(255,255,255,.3)',
  $orangered: '#ff4500',
  $limegreen: '#32cd32',
  $lightslategrey: '#778899',
  $peru: '#cd853f',
  $darkslateblue: '#483d8b',
});

export default () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);
