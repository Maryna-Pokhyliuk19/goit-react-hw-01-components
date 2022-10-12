import css from './TransactionTitle.module.css';
export const TransactionTitle = () => {
  return (
    <thead className={css.transactionsTitleName}>
      <tr>
        <th className={css.transactionsName}>Type</th>
        <th className={css.transactionsName}>Amount</th>
        <th className={css.transactionsName}>Currency</th>
      </tr>
    </thead>
  );
};
