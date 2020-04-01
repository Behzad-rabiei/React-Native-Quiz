import {
  SET_TOTALCOUNT,
  CORRECTCOUNT_PLUS,
  ACTIVE_QUESTION_INDEX_PLUS,
} from '../actions/actionsType';

const initialState = {
  correctCount: 0,
  totalCount: 0,
  activeQuestionIndex: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOTALCOUNT: {
      return {
        ...state,
        totalCount: action.value,
      };
    }
    case CORRECTCOUNT_PLUS: {
      return {
        ...state,
        correctCount: state.correctCount + 1,
      };
    }
    case ACTIVE_QUESTION_INDEX_PLUS: {
      return {
        ...state,
        activeQuestionIndex: state.activeQuestionIndex + 1,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
