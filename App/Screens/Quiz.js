import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {Container} from '../Components/Container';
import {Question} from '../Components/Question';
import {Answer} from '../Components/Answer';
import {PageNumber} from '../Components/PageNumber';
import {styles} from '../Components/Container';
import computers from '../data/computers';
const question = computers[0].question;
const answers = computers[0].answers;

class Home extends Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.safeArea}>
          <View>
            <Question question={question} />
            <Answer answers={answers} />
          </View>
          <PageNumber number="0/3" />
        </SafeAreaView>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const {correctCount, totalCount} = state;
  return {correctCount, totalCount};
};
export default connect(mapStateToProps)(Home);
