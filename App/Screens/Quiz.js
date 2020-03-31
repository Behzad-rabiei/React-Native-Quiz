import React, {Component} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Container} from '../Components/Container';
import {Question} from '../Components/Question';
class Home extends Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <Question />
        </SafeAreaView>
      </Container>
    );
  }
}
export default Home;
