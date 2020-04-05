import React from 'react';
import {View} from 'react-native';
import styles from './styles';

const Container = ({children, QuizIndex}) => {
  const containerStyle = [styles.container];
  if (QuizIndex) {
    containerStyle.push(styles.QuizIndex);
  }
  return <View style={containerStyle}>{children}</View>;
};

export default Container;
