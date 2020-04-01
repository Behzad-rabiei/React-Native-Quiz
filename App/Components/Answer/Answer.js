import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity} from 'react-native';
import {correctCountPlus, ActiveQuestionIndexPlus} from '../../actions/index';
import styles from './styles';

class Answer extends Component {
  handleOnPress = (correct) => {
    const {dispatch} = this.props;
    if (correct) {
      dispatch(correctCountPlus());
    }
    dispatch(ActiveQuestionIndexPlus());
  };

  render() {
    const {answers} = this.props;
    return (
      <View style={styles.container}>
        {answers.map((answer) => (
          <TouchableOpacity
            style={styles.button}
            key={answer.id}
            onPress={() => this.handleOnPress(answer.correct)}>
            <Text style={styles.text}>{answer.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

export default connect()(Answer);
