import React from 'react';
import {StatusBar, ScrollView} from 'react-native';
import {Container} from '../Components/Container';
import {RowItem} from '../Components/RowItem';

const QuizIndex = ({navigation}) => (
  <ScrollView>
    <Container QuizIndex>
      <StatusBar barStyle="dark-content" />
      <RowItem categoryName="Space" navigation={navigation} />
      <RowItem categoryName="Western" navigation={navigation} />
      <RowItem categoryName="Computer" navigation={navigation} />
    </Container>
  </ScrollView>
);

export default QuizIndex;
