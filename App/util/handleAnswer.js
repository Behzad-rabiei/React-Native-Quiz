import {
  correctCountPlus,
  ActiveQuestionIndexPlus,
  resetActiveQuestionIndex,
  setAnswerd,
  setAnswerCorrect,
} from '../actions/index';

export const nextQuestion = (props) => {
  const {
    dispatch,
    length,
    activeQuestionIndex,
    navigation,
    categoryColor,
  } = props;

  dispatch(setAnswerd(false));
  dispatch(setAnswerCorrect(false));

  if (activeQuestionIndex + 1 >= length) {
    dispatch(resetActiveQuestionIndex());
    navigation.navigate('Summery', {color: categoryColor});
  } else {
    dispatch(ActiveQuestionIndexPlus());
  }
};

const handleAnswer = (correct, props) => {
  const {dispatch} = props;
  dispatch(setAnswerd(true));
  if (correct) {
    dispatch(correctCountPlus());
    dispatch(setAnswerCorrect(true));
  }
  setTimeout(() => nextQuestion(props), 750);
};

export default handleAnswer;
