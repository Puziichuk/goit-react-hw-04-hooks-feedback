import PropTypes from 'prop-types';
import notification from './Notification.module.css';

function Notification({ message }) {
  return <p className={notification.message}>{message}</p>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;


