import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';

const Alert = ({answerd, answerCorrect}) => {
  if (!answerd) {
    return null;
  }
  const circleStyle = [styles.circle];
  if (answerCorrect) {
    circleStyle.push(styles.greenCircle);
  } else {
    circleStyle.push(styles.redCircle);
  }
  const icon = answerCorrect
    ? require('../../../assets/check.png')
    : require('../../../assets/close.png');

  return (
    <View style={styles.container}>
      <View style={circleStyle}>
        <Image style={styles.icon} source={icon} resizeMode="contain" />
      </View>
    </View>
  );
};

export default Alert;
