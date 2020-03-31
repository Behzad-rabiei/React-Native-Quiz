import React, {Component} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Container} from '../Components/Container';
class Home extends Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView></SafeAreaView>
      </Container>
    );
  }
}
export default Home;
