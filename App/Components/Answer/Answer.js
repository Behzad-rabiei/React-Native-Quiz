import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  correctCountPlus,
  ActiveQuestionIndexPlus,
  resetActiveQuestionIndex,
  setAnswerd,
  setAnswerCorrect,
} from '../../actions/index';
import styles from './styles';

class Answer extends Component {
  nextQuestion = () => {
    const {dispatch, length, activeQuestionIndex} = this.props;

    dispatch(setAnswerd(false));
    dispatch(setAnswerCorrect(false));

    if (activeQuestionIndex + 1 >= length) {
      dispatch(resetActiveQuestionIndex());
    } else {
      dispatch(ActiveQuestionIndexPlus());
    }
  };

  handleOnPress = (correct) => {
    const {dispatch} = this.props;
    dispatch(setAnswerd(true));
    if (correct) {
      dispatch(correctCountPlus());
      dispatch(setAnswerCorrect(true));
    }
    setTimeout(() => this.nextQuestion(), 750);
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
