import { Transaction } from "../Transaction/Transaction";
import css from './TransactionHistory.module.css'
import { TransactionTitle } from "../TransactionTitle/TransactionTitle";
import PropTypes from 'prop-types';

export const TransactionHistory = ({ transactions }) => {
    return (
        <div className={css.transactionsSection}>
        <TransactionTitle />
        <ul className={css.transactionsList}>
            {transactions.map(({id, type, amount, currency}) => (
            <Transaction key={id} type={type} amount={amount} currency={currency} />
            ))}
        </ul>
    </div>)
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    }))
}