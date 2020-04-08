import {
  SET_TOTAL_COUNT,
  CORRECT_COUNT_PLUS,
  RESET_CORRECT_COUT,
  ACTIVE_QUESTION_INDEX_PLUS,
  RESET_ACTIVE_QUESTION_INDEX,
  SET_ANSWER_CORRECT,
  SET_ANSWERED,
  SET_CATEGORY,
  SET_CATEGORY_COLOR,
} from '../actions/actionsType';

const initialState = {
  correctCount: 0,
  totalCount: 0,
  activeQuestionIndex: 0,
  category: null,
  categoryColor: null,
  answerd: false,
  answerCorrect: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOTAL_COUNT: {
      return {
        ...state,
        totalCount: action.value,
      };
    }
    case CORRECT_COUNT_PLUS: {
      return {
        ...state,
        correctCount: state.correctCount + 1,
      };
    }
    case RESET_CORRECT_COUT: {
      return {
        ...state,
        correctCount: 0,
      };
    }
    case ACTIVE_QUESTION_INDEX_PLUS: {
      return {
        ...state,
        activeQuestionIndex: state.activeQuestionIndex + 1,
      };
    }
    case RESET_ACTIVE_QUESTION_INDEX: {
      return {
        ...state,
        activeQuestionIndex: 0,
      };
    }
    case SET_ANSWERED: {
      return {
        ...state,
        answerd: action.value,
      };
    }
    case SET_ANSWER_CORRECT: {
      return {
        ...state,
        answerCorrect: action.value,
      };
    }
    case SET_CATEGORY: {
      return {
        ...state,
        category: action.value,
      };
    }
    case SET_CATEGORY_COLOR: {
      return {
        ...state,
        categoryColor: action.value,
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
