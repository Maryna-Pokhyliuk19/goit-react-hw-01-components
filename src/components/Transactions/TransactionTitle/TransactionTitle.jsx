import css from './TransactionTitle.module.css'
export const TransactionTitle = () => {
    return (
        <div className={css.transactionsTitleName}>
        <p className={css.transactionsName}>Type</p>
        <p className={css.transactionsName}>Amount</p>
        <p className={css.transactionsName}>Currency</p>
        </div>
    )
}