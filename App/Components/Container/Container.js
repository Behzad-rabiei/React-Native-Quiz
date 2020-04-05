import React from 'react';
import {View} from 'react-native';
import styles from './styles';

const Container = ({children, QuizIndex, backgroundColor}) => {
  const containerStyle = [styles.container];
  if (QuizIndex) {
    containerStyle.push(styles.QuizIndex);
  }
  switch (backgroundColor) {
    case 'Space': {
      containerStyle.push(styles.space);
      break;
    }
    case 'Western': {
      containerStyle.push(styles.western);
      break;
    }
    case 'Computer': {
      containerStyle.push(styles.computer);
      break;
    }
    default:
  }
  return <View style={containerStyle}>{children}</View>;
};

export default Container;
