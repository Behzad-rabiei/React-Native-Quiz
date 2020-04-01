import {SET_TOTALCOUNT, CORRECTCOUNT_PLUS} from '../actions/actionsType';
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
  }
};

export default rootReducer;
