import React from 'react';
import {View, Text} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles';

const SummeryText = () => {
  return (
    <View style={styles.container}>
      <Animatable.View animation="zoomIn">
        <Text style={styles.title}>Quiz Finished</Text>
        <Text style={styles.other}>
          Category:
          <Text style={styles.result}> computers</Text>
        </Text>
        <Text style={styles.other}>
          Questions:
          <Text style={styles.result}> 20</Text>
        </Text>
        <Text style={styles.other}>
          Correct Answers:
          <Text style={styles.result}> 15</Text>
        </Text>
        <Text style={styles.other}>
          Time:
          <Text style={styles.result}> 1.20.50</Text>
        </Text>
      </Animatable.View>
    </View>
  );
};
export default SummeryText;
