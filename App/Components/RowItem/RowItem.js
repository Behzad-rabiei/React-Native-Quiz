import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TouchableOpacity, View, Text} from 'react-native';
import {setCategory} from '../../actions/index';
import styles from './styles';

class RowItem extends Component {
  handleOnPress = () => {
    const {navigation, dispatch, categoryName} = this.props;
    navigation.navigate('Quiz');
    dispatch(setCategory(categoryName));
  };

  render() {
    const {categoryName} = this.props;
    const containerStyle = [styles.container];
    switch (categoryName) {
      case 'Space': {
        containerStyle.push(styles.space);
        break;
      }
      case 'Computer': {
        containerStyle.push(styles.computer);
        break;
      }
      case 'Western': {
        containerStyle.push(styles.western);
        break;
      }
      default:
    }
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
