import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  correctCountPlus,
  ActiveQuestionIndexPlus,
  resetActiveQuestionIndex,
} from '../../actions/index';
import styles from './styles';

class Answer extends Component {
  handleOnPress = (correct) => {
    const {dispatch, length, activeQuestionIndex} = this.props;
    if (correct) {
      dispatch(correctCountPlus());
    }
    if (activeQuestionIndex + 1 >= length) {
      dispatch(resetActiveQuestionIndex());
    } else {
      dispatch(ActiveQuestionIndexPlus());
    }
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
const mapStateToProps = (state) => {
  const {activeQuestionIndex} = state;
  return {
    activeQuestionIndex,
  };
};
export default connect(mapStateToProps)(Answer);
