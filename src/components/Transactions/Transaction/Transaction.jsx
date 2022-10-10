import PropTypes from 'prop-types';

export const Transaction = ({ id, type, amount, currency }) => {
  return (
    <li key={id}>
      <p class="type">{type}</p>
      <p class="amount">{amount}</p>
      <p class="currency">{currency }</p>
    </li>
  )
  }

  Transaction.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}