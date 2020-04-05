import React from 'react';
import {Button} from 'react-native';
import {Container} from '../Components/Container';

const QuizIndex = ({navigation}) => (
  <Container QuizIndex>
    <Button
      title="go to quiz page"
      onPress={() => navigation.navigate('Quiz')}
    />
  </Container>
);

export default QuizIndex;
