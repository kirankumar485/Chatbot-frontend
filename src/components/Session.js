import React from 'react';
import { useDispatch } from 'react-redux';
import { createClientMessage } from 'react-chatbot-kit';
import { addSelectedSession } from '../slices/StudentSlice';

function Session(props) {
  const dispatch = useDispatch();

  const handleYesClick = () => {
    const botMessage = createClientMessage('In Person');

    props.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));

    dispatch(addSelectedSession('In Person'));
    props.actionProvider.handleName();
  };

  const handleNoCancelClick = () => {
    const botMessage = createClientMessage('Online');

    props.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));

    dispatch(addSelectedSession('Online'));
  };

  return (
    <div className="scedule-button">
      <button type="button" onClick={handleYesClick}>
        In Person
      </button>
      <button type="button" onClick={handleNoCancelClick}>
        Online
      </button>
    </div>
  );
}

export default Session;
