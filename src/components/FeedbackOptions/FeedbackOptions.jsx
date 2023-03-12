import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className={css.btn_bar}>
            {options.map(option => (
                <button className={css.feedback_btn} type='button' onClick={onLeaveFeedback} key={shortid.generate()}>
                    {option}
                </button>
            ))}
        </div>
    )
};

FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func,
}

export default FeedbackOptions;