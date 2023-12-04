import React, { Fragment } from 'react';
import { Button, Icon, Modal } from 'semantic-ui-react';

const ShareButton = () => {
  // Function to handle the click event for sharing
  const handleClick = () => {
    navigator
      .share({
        title: document.title,
        text: 'Check out this quiz app — it rocks!',
        url: 'https://safdarjamal.github.io/quiz-app/',
      })
      .then(() => console.log('Successfully shared'))
      .catch(error => console.log(error.message));
  };

  // Render the sharing options modal
  const renderSharingOptions = () => (
    <Modal
      closeIcon
      size="tiny"
      trigger={
        <Button
          title="Share"
          floated="right"
          size="big"
          circular
          icon="share alternate"
        />
      }
    >
      <Modal.Header className="ui center aligned">Share on</Modal.Header>
      <Modal.Content className="ui center aligned container">
        {/* Facebook sharing button */}
        <a
          href="https://www.facebook.com/sharer.php?u=https%3A//safdarjamal.github.io/quiz-app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button color="facebook" size="big" style={{ marginBottom: 8 }}>
            <Icon name="facebook" />
            Facebook
          </Button>
        </a>
        {/* Twitter sharing button */}
        <a
          href="https://twitter.com/intent/tweet?url=https%3A//safdarjamal.github.io/quiz-app/&text=Check%20out%20this%20quiz%20app%20—%20it%20rocks!&via=_safdarjamal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button color="twitter" size="big" style={{ marginBottom: 8 }}>
            <Icon name="twitter" />
            Twitter
          </Button>
        </a>
        {/* LinkedIn sharing button */}
        <a
          href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fsafdarjamal.github.io%2Fquiz-app%2F"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button color="linkedin" size="big">
            <Icon name="linkedin" />
            LinkedIn
          </Button>
        </a>
      </Modal.Content>
    </Modal>
  );

  // Render the ShareButton component
  return (
    <Fragment>
      {/* Check if the navigator supports the share API */}
      {navigator.share ? (
        <Button
          title="Share"
          floated="right"
          size="big"
          circular
          icon="share alternate"
          onClick={handleClick}
        />
      ) : (
        // Render sharing options modal if the share API is not supported
        renderSharingOptions()
      )}
    </Fragment>
  );
};

export default ShareButton;
