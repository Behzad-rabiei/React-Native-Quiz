import {
  setCategory,
  setCategoryColor,
  resetActiveQuestionIndex,
  resetCorrectCount,
} from '../actions/index';

const handleRowItem = (props) => {
  const {navigation, dispatch, categoryName, categoryColor} = props;
  dispatch(setCategory(categoryName));
  dispatch(setCategoryColor(categoryColor));
  dispatch(resetCorrectCount());
  dispatch(resetActiveQuestionIndex());
  navigation.navigate('Quiz', {title: categoryName, color: categoryColor});
};

export default handleRowItem;
