import PropTypes from 'prop-types';
import feedback from './Feedback.module.css';

function Feedback ({ options, onLeaveFeedback }) {
  return options.map(option => (
    <button
      type="button"
      className={feedback.button}
      key={option}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </button>
  ));
}

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),

  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Feedback;