import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';

const Alert = () => (
  <View style={styles.container}>
    <View style={styles.redCircle}>
      <Image
        style={styles.icon}
        source={require('../../../assets/close.png')}
        resizeMode="contain"
      />
    </View>
  </View>
);

export default Alert;
