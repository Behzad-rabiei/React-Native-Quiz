import React from 'react';
import {StatusBar, ScrollView} from 'react-native';
import {Container} from '../Components/Container';
import {RowItem} from '../Components/RowItem';

const QuizIndex = ({navigation}) => (
  <ScrollView>
    <Container QuizIndex>
      <StatusBar barStyle="dark-content" />
      <RowItem
        categoryName="Space"
        navigation={navigation}
        categoryColor="#483d8b"
      />
      <RowItem
        categoryName="Western"
        navigation={navigation}
        categoryColor="#cd853f"
      />
      <RowItem
        categoryName="Computer"
        navigation={navigation}
        categoryColor="#778899"
      />
    </Container>
  </ScrollView>
);

export default QuizIndex;
