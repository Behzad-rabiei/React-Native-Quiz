import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {Container, styles} from '../Components/Container';
import {Question} from '../Components/Question';
import {Answer} from '../Components/Answer';
import {CorrectTotal} from '../Components/CorrectTotal';
import {setTotalCount} from '../actions/index';
import {Alert} from '../Components/Alert';
import Computers from '../data/computers';
import Space from '../data/space';
import Western from '../data/westerns';

class Home extends Component {
  render() {
    const {
      totalCount,
      correctCount,
      dispatch,
      activeQuestionIndex,
      answerd,
      answerCorrect,
      category,
    } = this.props;
    let question;
    let answers;
    switch (category) {
      case 'Space': {
        question = Space[activeQuestionIndex].question;
        answers = Space[activeQuestionIndex].answers;
        break;
      }
      case 'Western': {
        question = Western[activeQuestionIndex].question;
        answers = Western[activeQuestionIndex].answers;
        break;
      }
      case 'Computer': {
        question = Computers[activeQuestionIndex].question;
        answers = Computers[activeQuestionIndex].answers;
        break;
      }
      default:
    }
    dispatch(setTotalCount(category.length));
    return (
      <Container>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.safeArea}>
          <View>
            <Question question={question} />
            <Answer answers={answers} length={category.length} />
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
    category,
  } = state;
  return {
    totalCount,
    correctCount,
    activeQuestionIndex,
    answerd,
    answerCorrect,
    category,
  };
};

export default connect(mapStateToProps)(Home);
