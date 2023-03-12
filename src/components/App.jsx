import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import React, { Component } from "react";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleFeedback = (e) => {
    if (e.target.textContent === 'good') {
      this.setState({
        good: this.state.good + 1
      })
    };
    if (e.target.textContent === 'neutral') {
      this.setState({
        neutral: this.state.neutral + 1
      })
    };
    if (e.target.textContent === 'bad') {
      this.setState({
        bad: this.state.bad + 1
      })
    };
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => { 
    const { good } = this.state;
    return +Math.round((good / this.countTotalFeedback()) * 100) || 0;
  }
  

  render() {
    const { good, neutral, bad } = this.state;
    if ((Object.values(this.state)).some(value => value>0)) {
      return (
      <div>
        <Section title='Please leave feedback'>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedback}>
          </FeedbackOptions>
        </Section>
        <Section title='Statistics'>
          <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}>
          </Statistics>
        </Section>
      </div>
    );
    } else {
      return (
      <div>
        <Section title='Please leave feedback'>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedback}>
          </FeedbackOptions>
        </Section>
        <Section title='Statistics'>
          <Notification message="There is no feedback"></Notification>
        </Section>
      </div>
    );
    }
  }
};

export default App;