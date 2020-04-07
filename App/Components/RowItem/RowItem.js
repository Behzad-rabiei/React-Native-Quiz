import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TouchableOpacity, View, Text} from 'react-native';
import {
  setCategory,
  resetCorrectCount,
  resetActiveQuestionIndex,
} from '../../actions/index';
import {setRowItemContainerStyle} from '../../util/handleStyles';
import styles from './styles';

class RowItem extends Component {
  handleOnPress = () => {
    const {navigation, dispatch, categoryName, categoryColor} = this.props;
    navigation.navigate('Quiz', {title: categoryName, color: categoryColor});
    dispatch(setCategory(categoryName));
    dispatch(resetCorrectCount());
    dispatch(resetActiveQuestionIndex());
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
