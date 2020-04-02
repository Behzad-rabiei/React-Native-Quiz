import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {Container, styles} from '../Components/Container';
import {Question} from '../Components/Question';
import {Answer} from '../Components/Answer';
import {CorrectTotal} from '../Components/CorrectTotal';
import {setTotalCount} from '../actions/index';
import {Alert} from '../Components/Alert';
import computers from '../data/computers';

class Home extends Component {
  render() {
    const {
      totalCount,
      correctCount,
      dispatch,
      activeQuestionIndex,
      answerd,
      answerCorrect,
    } = this.props;
    const question = computers[activeQuestionIndex].question;
    const answers = computers[activeQuestionIndex].answers;
    dispatch(setTotalCount(computers.length));
    return (
      <Container>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.safeArea}>
          <View>
            <Question question={question} />
            <Answer answers={answers} length={computers.length} />
          </View>
          <CorrectTotal totalCount={`${correctCount}/${totalCount}`} />
        </SafeAreaView>
        <Alert answerd={answerd} answerCorrect={answerCorrect} />
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  const {
    totalCount,
    correctCount,
    activeQuestionIndex,
    answerd,
    answerCorrect,
  } = state;
  return {
    totalCount,
    correctCount,
    activeQuestionIndex,
    answerd,
    answerCorrect,
  };
};

export default connect(mapStateToProps)(Home);
