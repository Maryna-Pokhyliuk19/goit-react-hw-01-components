import { Transaction } from "../Transaction/Transaction";
import { TransactionTitle } from "../TransactionTitle/TransactionTitle";
import PropTypes from 'prop-types';

export const TransactionHistory = ({ transactions }) => {
    return (
        <div>
        <TransactionTitle />
        <ul class="transactions-list">
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