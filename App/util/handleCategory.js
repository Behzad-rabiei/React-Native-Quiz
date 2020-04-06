import Computers from '../data/computers';
import Space from '../data/space';
import Western from '../data/westerns';

const handleCategory = (props) => {
  const {activeQuestionIndex, category} = props;
  switch (category) {
    case 'Space': {
      return {
        question: Space[activeQuestionIndex].question,
        answers: Space[activeQuestionIndex].answers,
        length: Space.length,
      };
    }
    case 'Western': {
      return {
        question: Western[activeQuestionIndex].question,
        answers: Western[activeQuestionIndex].answers,
        length: Western.length,
      };
    }
    case 'Computer': {
      return {
        question: Computers[activeQuestionIndex].question,
        answers: Computers[activeQuestionIndex].answers,
        length: Computers.length,
      };
    }
    default:
      return {
        question: null,
        answers: null,
        length: null,
      };
  }
};

export default handleCategory;
