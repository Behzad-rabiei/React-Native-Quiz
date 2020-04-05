import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: 10,
    width: '46%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '$opacity',
    paddingVertical: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: '$white',
  },
});
