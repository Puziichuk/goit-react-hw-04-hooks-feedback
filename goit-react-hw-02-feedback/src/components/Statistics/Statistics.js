import PropTypes from 'prop-types';
import statistics from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className={statistics.list}>
      <li className={statistics.item}>Good: {good}</li>
      <li className={statistics.item}>Neutral: {neutral}</li>
      <li className={statistics.item}>Bad: {bad}</li>
      <li className={statistics.item}>Total: {total}</li>
      <li className={statistics.item}>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
