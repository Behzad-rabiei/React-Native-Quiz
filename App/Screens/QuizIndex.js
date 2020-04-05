import React from 'react';
import {Button} from 'react-native';
import {Container} from '../Components/Container';
import {RowItem} from '../Components/RowItem';

const QuizIndex = ({navigation}) => (
  <Container QuizIndex>
    <Button
      title="go to quiz page"
      onPress={() => navigation.navigate('Quiz')}
    />
    <RowItem categoryName="Space" />
    <RowItem categoryName="Computer" />
    <RowItem categoryName="Western" />
  </Container>
);

export default QuizIndex;
