import React, {Component} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './styles';

class RowItem extends Component {
  handleOnPress = () => {};

  render() {
    const {categoryName} = this.props;
    return (
      <TouchableOpacity>
        <View style={styles.container}>
          <Text style={styles.text}>{categoryName}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default RowItem;
