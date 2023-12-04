import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';

// Component for displaying Questions and Answers table
const QNA = ({ questionsAndAnswers }) => {
  // Render the Q&A table
  const renderQnaTable = () => (
    <Table celled striped selectable size="large">
      {/* Table Header */}
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>No.</Table.HeaderCell>
          <Table.HeaderCell>Questions</Table.HeaderCell>
          <Table.HeaderCell>Your Answers</Table.HeaderCell>
          <Table.HeaderCell>Correct Answers</Table.HeaderCell>
          <Table.HeaderCell>Points</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      {/* Table Body */}
      <Table.Body>
        {questionsAndAnswers.map((item, i) => (
          // Row for each question and answer set
          <Table.Row key={i + 1}>
            <Table.Cell>{i + 1}</Table.Cell>
            <Table.Cell>{item.question}</Table.Cell>
            <Table.Cell>{item.user_answer}</Table.Cell>
            <Table.Cell>{item.correct_answer}</Table.Cell>
            <Table.Cell>{item.point}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );

  return renderQnaTable();
};

// PropTypes for type-checking
QNA.propTypes = {
  questionsAndAnswers: PropTypes.array.isRequired,
};

export default QNA;
