import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import computers from '../../data/computers';
import styles from './styles';

class Answer extends Component {
  render() {
    return (
      <View style={styles.container}>
        {computers[0].answers.map(answers => (
          <TouchableOpacity style={styles.button} key={answers.id}>
            <Text style={styles.text}>{answers.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

export default Answer;
