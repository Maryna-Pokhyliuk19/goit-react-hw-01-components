import css from './Transaction.module.css'
import PropTypes from 'prop-types';

export const Transaction = ({ id, type, amount, currency }) => {
  return (
    <li className={css.transactionsNameList} key={id}>
      <p className={css.transactionsNameItem}>{type}</p>
      <p className={css.transactionsNameItem}>{amount}</p>
      <p className={css.transactionsNameItem}>{currency }</p>
    </li>
  )
  }

  Transaction.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}