import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';
import { TransactionTitle } from '../TransactionTitle/TransactionTitle';
import { Transaction } from '../Transaction/Transaction';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.transactionsHistory}>
      <TransactionTitle />
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <Transaction
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
