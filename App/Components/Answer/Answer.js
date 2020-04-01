import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

class Answer extends Component {
  render() {
    const {answers} = this.props;
    return (
      <View style={styles.container}>
        {answers.map((answer) => (
          <TouchableOpacity style={styles.button} key={answer.id}>
            <Text style={styles.text}>{answer.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

export default Answer;
