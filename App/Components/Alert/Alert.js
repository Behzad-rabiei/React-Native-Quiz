import React, {Component} from 'react';
import {View, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {setCircleStyle} from '../../util/handleStyles';
import styles from './styles';

class Alert extends Component {
  render() {
    const {answerd, answerCorrect} = this.props;
    if (!answerd) {
      return null;
    }
    const {circleStyle, icon} = setCircleStyle(answerCorrect, styles);
    return (
      <View style={styles.container}>
        <Animatable.View
          animation="fadeIn"
          direction="reverse"
          easing="ease-in-sine">
          <View style={circleStyle}>
            <Image style={styles.icon} source={icon} resizeMode="contain" />
          </View>
        </Animatable.View>
      </View>
    );
  }
}

export default Alert;
