import css from "./Feedback.module.css";

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  const { good, bad, neutral } = feedback;

  return (
    <ul className={css.feedback}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {positiveFeedback}%</li>
    </ul>
  );
};

export default Feedback;
