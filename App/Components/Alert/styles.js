import {Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const screen = Dimensions.get('window');
export default EStyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: screen.width / 2,
    height: screen.width / 2,
    borderRadius: screen.width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  redCircle: {
    backgroundColor: '$orangered',
  },
  greenCircle: {
    backgroundColor: '$limegreen',
  },
  icon: {
    width: screen.width / 3,
  },
});
