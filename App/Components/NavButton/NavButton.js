import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

class NavButton extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity>
          <Text>Quizzes</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default NavButton;
