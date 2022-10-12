import css from './Stat.module.css';
import PropTypes from 'prop-types';

export const Stat = ({ id, label, percentage }) => {
  return (
    <li className={css.statItem} key={id}>
      <span className={css.statLabel}>{label}</span>
      <span className={css.statPercentage}>{percentage}%</span>
    </li>
  );
};

Stat.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
