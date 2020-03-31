import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

const Question = ({question}) => <Text style={styles.text}>{question}</Text>;
export default Question;
