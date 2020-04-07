import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {Container, styles} from '../Components/Container';
import {Question} from '../Components/Question';
import {Answer} from '../Components/Answer';
import {CorrectTotal} from '../Components/CorrectTotal';
import {setTotalCount} from '../actions/index';
import {Alert} from '../Components/Alert';
import handleCategory from '../util/handleCategory';

class Home extends Component {
  render() {
    const {
      totalCount,
      correctCount,
      dispatch,
      answerd,
      answerCorrect,
      category,
      navigation,
    } = this.props;
    const {question, answers, length} = handleCategory(this.props);
    dispatch(setTotalCount(length));
    return (
      <Container backgroundColor={category}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.safeArea}>
          <View>
            <Question question={question} />
            <Answer answers={answers} length={length} navigation={navigation} />
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
