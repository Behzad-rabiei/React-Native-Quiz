import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TouchableOpacity, View, Text} from 'react-native';
import {
  setCategory,
  resetCorrectCount,
  resetActiveQuestionIndex,
  setCategoryColor,
} from '../../actions/index';
import {setRowItemContainerStyle} from '../../util/handleStyles';
import styles from './styles';

class RowItem extends Component {
  handleOnPress = () => {
    const {navigation, dispatch, categoryName, categoryColor} = this.props;
    dispatch(setCategory(categoryName));
    dispatch(setCategoryColor(categoryColor));
    dispatch(resetCorrectCount());
    dispatch(resetActiveQuestionIndex());
    navigation.navigate('Quiz', {title: categoryName, color: categoryColor});
  };

  render() {
    const {categoryName} = this.props;
    const containerStyle = setRowItemContainerStyle(this.props, styles);
    return (
      <TouchableOpacity onPress={() => this.handleOnPress()}>
        <View style={containerStyle}>
          <Text style={styles.text}>{categoryName}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default connect()(RowItem);
