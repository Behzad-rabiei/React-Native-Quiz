import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {setContainerStyle} from '../../util/handleStyles';

const Container = ({children, QuizIndex, backgroundColor}) => {
  const containerStyle = setContainerStyle(QuizIndex, backgroundColor, styles);
  return <View style={containerStyle}>{children}</View>;
};

export default Container;
