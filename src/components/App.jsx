import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import { useState } from 'react';


export default function App() {
  const [goodFb, addGoodFeedback] = useState(0);
  const [neutralFb, addNeutralFeedback] = useState(0);
  const [badFb, addBadFeedback] = useState(0);

  const totalFeedbacks = {
    good: goodFb,
    neutral: neutralFb,
    bad: badFb,
  }

  const handleFeedback = (e) => {
    if (e.target.textContent === 'good') {
      addGoodFeedback(fb => fb + 1);
    };
    if (e.target.textContent === 'neutral') {
      addNeutralFeedback(fb => fb + 1);
    };
    if (e.target.textContent === 'bad') {
      addBadFeedback(fb => fb + 1);
    };
  };

  const countTotalFeedback = () => {
    return Object.values(totalFeedbacks).reduce((acc, val) => acc + val, 0);
  };

  const countPositiveFeedbackPercentage = () => { 
    return +Math.round((totalFeedbacks.good / countTotalFeedback()) * 100) || 0;
  }

  if ((Object.values(totalFeedbacks)).some(value => value>0)) {
    return (
      <div>
        <Section title='Please leave feedback'>
          <FeedbackOptions
            options={Object.keys(totalFeedbacks)}
            onLeaveFeedback={handleFeedback}>
          </FeedbackOptions>
        </Section>
        <Section title='Statistics'>
          <Statistics good={totalFeedbacks.good} neutral={totalFeedbacks.neutral} bad={totalFeedbacks.bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()}>
          </Statistics>
        </Section>
      </div>
    )
  }
  else {
    return (
      <div>
        <Section title='Please leave feedback'>
          <FeedbackOptions
            options={Object.keys(totalFeedbacks)}
            onLeaveFeedback={handleFeedback}>
          </FeedbackOptions>
        </Section>
        <Section title='Statistics'>
          <Notification message="There is no feedback"></Notification>
        </Section>
      </div>
    );
  }
}
