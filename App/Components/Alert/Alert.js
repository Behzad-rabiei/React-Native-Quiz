import React from 'react';
import {View, Image} from 'react-native';
import {setCircleStyle} from '../../util/handleStyles';
import styles from './styles';

const Alert = ({answerd, answerCorrect}) => {
  if (!answerd) {
    return null;
  }
  const {circleStyle, icon} = setCircleStyle(answerCorrect, styles);
  return (
    <View style={styles.container}>
      <View style={circleStyle}>
        <Image style={styles.icon} source={icon} resizeMode="contain" />
      </View>
    </View>
  );
};

export default Alert;
