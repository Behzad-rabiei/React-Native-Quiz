import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container} from '../Components/Container';
import {SummeryText} from '../Components/SummeryText';
import {NavButton} from '../Components/NavButton';

class Summery extends Component {
  render() {
    const {category, totalCount, correctCount, navigation} = this.props;
    return (
      <Container Summery backgroundColor={category}>
        <SummeryText
          category={category}
          totalCount={totalCount}
          correctCount={correctCount}
        />
        <NavButton navigation={navigation} />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const {totalCount, correctCount, category} = state;
  return {
    totalCount,
    correctCount,
    category,
  };
};
export default connect(mapStateToProps)(Summery);
