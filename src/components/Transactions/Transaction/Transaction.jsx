import css from './Transaction.module.css';
import PropTypes from 'prop-types';

export const Transaction = ({ id, type, amount, currency }) => {
  return (
    <tr className={css.transactionsNameList} key={id}>
      <td className={css.transactionsNameItem}>{type}</td>
      <td className={css.transactionsNameItem}>{amount}</td>
      <td className={css.transactionsNameItem}>{currency}</td>
    </tr>
  );
};

Transaction.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
