import {
  SET_TOTALCOUNT,
  CORRECTCOUNT_PLUS,
  ACTIVE_QUESTION_INDEX_PLUS,
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
