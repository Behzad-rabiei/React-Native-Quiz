import {
  SET_TOTALCOUNT,
  CORRECTCOUNT_PLUS,
  ACTIVE_QUESTION_INDEX_PLUS,
  RESET_ACTIVE_QUESTION_INDEX,
  SET_ANSWERED,
  SET_ANSWER_CORRECT,
  SET_CATEGORY,
} from './actionsType';

export const setTotalCount = (number) => {
  return {
    type: SET_TOTALCOUNT,
    value: number,
  };
};
export const correctCountPlus = () => {
  return {
    type: CORRECTCOUNT_PLUS,
  };
};

export const ActiveQuestionIndexPlus = () => {
  return {
    type: ACTIVE_QUESTION_INDEX_PLUS,
  };
};
export const resetActiveQuestionIndex = () => {
  return {
    type: RESET_ACTIVE_QUESTION_INDEX,
  };
};
export const setAnswerd = (flag) => {
  return {
    type: SET_ANSWERED,
    value: flag,
  };
};
export const setAnswerCorrect = (flag) => {
  return {
    type: SET_ANSWER_CORRECT,
    value: flag,
  };
};
export const setCategory = (category) => {
  return {
    type: SET_CATEGORY,
    value: category,
  };
};
