import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './styles';

class NavButton extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('QuizIndex')}>
          <Text style={styles.text}>Quizzes</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default NavButton;
