import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import computers from '../../data/computers';
class Question extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{computers[0].question}</Text>
      </View>
    );
  }
}

export default Question;
