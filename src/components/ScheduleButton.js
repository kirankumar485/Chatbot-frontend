import React from 'react';
import { useDispatch } from 'react-redux';
import { createClientMessage } from 'react-chatbot-kit';
import { addSelectedStatus } from '../slices/StudentSlice';

function ScheduleButton(props) {
  const dispatch = useDispatch();

  const handleYesClick = () => {
    const botMessage = createClientMessage('Yes');

    props.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));

    dispatch(addSelectedStatus('Yes'));
    props.actionProvider.handleSession();
  };

  const handleNoCancelClick = () => {
    const botMessage = createClientMessage('No Cancel');

    props.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));

    dispatch(addSelectedStatus('No Cancel'));
  };

  return (
    <div className="scedule-button">
      <button type="button" onClick={handleYesClick}>
        Yes
      </button>
      <button type="button" onClick={handleNoCancelClick}>
        No Cancel
      </button>
    </div>
  );
}

export default ScheduleButton;
