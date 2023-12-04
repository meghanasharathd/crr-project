import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Menu } from 'semantic-ui-react';

import Stats from './Stats';
import QNA from './QNA';

// Result component displays either Stats or QNA based on the selected tab
const Result = ({
  totalQuestions,
  correctAnswers,
  timeTaken,
  questionsAndAnswers,
  replayQuiz,
  resetQuiz,
}) => {
  // State to track the active tab (default: 'Stats')
  const [activeTab, setActiveTab] = useState('Stats');

  // Handle tab click event to switch between 'Stats' and 'QNA'
  const handleTabClick = (e, { name }) => {
    setActiveTab(name);
  };

  // Function to render the content based on the active tab
  const renderContent = () => {
    if (activeTab === 'Stats') {
      return (
        <Stats
          totalQuestions={totalQuestions}
          correctAnswers={correctAnswers}
          timeTaken={timeTaken}
          replayQuiz={replayQuiz}
          resetQuiz={resetQuiz}
        />
      );
    }

    if (activeTab === 'QNA') {
      return <QNA questionsAndAnswers={questionsAndAnswers} />;
    }

    // Add additional cases for other tabs if needed
    return null;
  };

  // Render the Result component
  return (
    <Container>
      {/* Menu for switching between 'Stats' and 'QNA' tabs */}
      <Menu fluid widths={2}>
        <Menu.Item
          name="Stats"
          active={activeTab === 'Stats'}
          onClick={handleTabClick}
        />
        <Menu.Item
          name="QNA"
          active={activeTab === 'QNA'}
          onClick={handleTabClick}
        />
      </Menu>

      {/* Render content based on the active tab */}
      {renderContent()}
      
      {/* Add some spacing */}
      <br />
    </Container>
  );
};

// PropTypes for type-checking
Result.propTypes = {
  totalQuestions: PropTypes.number.isRequired,
  correctAnswers: PropTypes.number.isRequired,
  timeTaken: PropTypes.number.isRequired,
  questionsAndAnswers: PropTypes.array.isRequired,
  replayQuiz: PropTypes.func.isRequired,
  resetQuiz: PropTypes.func.isRequired,
};

// Export the Result component
export default Result;
