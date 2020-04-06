import {
  correctCountPlus,
  ActiveQuestionIndexPlus,
  resetActiveQuestionIndex,
  setAnswerd,
  setAnswerCorrect,
} from '../actions/index';

export const nextQuestion = (props) => {
  const {dispatch, length, activeQuestionIndex} = props;

  dispatch(setAnswerd(false));
  dispatch(setAnswerCorrect(false));

  if (activeQuestionIndex + 1 >= length) {
    dispatch(resetActiveQuestionIndex());
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
