import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TouchableOpacity, View, Text} from 'react-native';
import {setRowItemContainerStyle} from '../../util/handleStyles';
import handleRowItem from '../../util/handleRowItem';
import styles from './styles';

class RowItem extends Component {
  render() {
    const {categoryName} = this.props;
    const containerStyle = setRowItemContainerStyle(this.props, styles);
    return (
      <TouchableOpacity onPress={() => handleRowItem(this.props)}>
        <View style={containerStyle}>
          <Text style={styles.text}>{categoryName}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default connect()(RowItem);
