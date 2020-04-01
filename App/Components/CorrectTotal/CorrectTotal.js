import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

const CorrectTotal = ({totalCount}) => (
  <Text style={styles.text}>{totalCount}</Text>
);

export default CorrectTotal;
