import React, {Component} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Container} from '../Components/Container';
import {Question} from '../Components/Question';
import {Answer} from '../Components/Answer';
import EStyleSheet from 'react-native-extended-stylesheet';
const style = EStyleSheet.create({
  safe: {
    flex: 1,
    marginTop: 100,
  },
});
class Home extends Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={style.safe}>
          <Question />
          <Answer />
        </SafeAreaView>
      </Container>
    );
  }
}
export default Home;
