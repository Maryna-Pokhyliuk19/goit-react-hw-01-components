import css from './StatisticsTitle.module.css'
import PropTypes from 'prop-types';

export const Title = ({ children }) => {
    return (
        <div className={css.sectionTitle}>
            {children && <h2 className={css.statisticsTitle}>{children}</h2>}
        </div>
    )
}

Title.propTypes = {
  children: PropTypes.string.isRequired,
}