export const setContainerStyle = (
  QuizIndex,
  backgroundColor,
  Summery,
  styles,
) => {
  const containerStyle = [styles.container];
  if (QuizIndex) {
    containerStyle.push(styles.QuizIndex);
  }
  if (Summery) {
    containerStyle.push(styles.Summery);
  }
  switch (backgroundColor) {
    case 'Space': {
      containerStyle.push(styles.space);
      break;
    }
    case 'Western': {
      containerStyle.push(styles.western);
      break;
    }
    case 'Computer': {
      containerStyle.push(styles.computer);
      break;
    }
    default:
  }
  return containerStyle;
};

export const setRowItemContainerStyle = (props, styles) => {
  const {categoryName} = props;
  const containerStyle = [styles.container];
  switch (categoryName) {
    case 'Space': {
      containerStyle.push(styles.space);
      break;
    }
    case 'Computer': {
      containerStyle.push(styles.computer);
      break;
    }
    case 'Western': {
      containerStyle.push(styles.western);
      break;
    }
    default:
  }
  return containerStyle;
};

export const setCircleStyle = (answerCorrect, styles) => {
  const circleStyle = [styles.circle];
  if (answerCorrect) {
    circleStyle.push(styles.greenCircle);
  } else {
    circleStyle.push(styles.redCircle);
  }
  const icon = answerCorrect
    ? require('../../assets/check.png')
    : require('../../assets/close.png');
  return {circleStyle, icon};
};
