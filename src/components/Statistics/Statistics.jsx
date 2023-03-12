import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';


const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
        return (
            <div className={css.stats}>
                <p className={css.stat_points}>Good: {good}</p>
                <p className={css.stat_points}>Neutral: {neutral}</p>
                <p className={css.stat_points}>Bad: {bad}</p>
                <p className={css.stat_points}>Total: {total}</p>
                <p className={css.stat_points}>Positive feedback: {positivePercentage}%</p>
            </div>
        );
};

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,  
}

export default Statistics;