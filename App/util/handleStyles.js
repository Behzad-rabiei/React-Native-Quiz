export const setContainerStyle = (QuizIndex, backgroundColor, styles) => {
  const containerStyle = [styles.container];
  if (QuizIndex) {
    containerStyle.push(styles.QuizIndex);
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
