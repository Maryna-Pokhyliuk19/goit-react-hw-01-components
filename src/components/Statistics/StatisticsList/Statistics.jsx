import css from './Statistics.module.css'
import { Stat } from "../Stat/Stat";
import { Title } from "../Title/StatisticsTitle";
import PropTypes from 'prop-types';



export const Statistic = ({ statistic, title }) => {
    
  return (
      
        <section className={css.statisticsSection}>
  <Title>{title}</Title>

  <ul className={css.statList}>
          {statistic.map(({ id, label, percentage }) => (
            <Stat key={id} label={label} percentage={ percentage } />
          ))}
  </ul>
</section>
    )
}

Statistic.propTypes = {
    statistic: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    }))
}