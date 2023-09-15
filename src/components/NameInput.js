import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createClientMessage } from 'react-chatbot-kit';
import { addCurrentStudentName } from '../slices/StudentSlice';

function NameInput(props) {
  const [name, setName] = useState('');

  const dispatch = useDispatch();

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const botMessage = createClientMessage(name);

      props.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));

      props.actionProvider.handleEnterAge();

      dispatch(addCurrentStudentName(name));
    }
  };

  return (
    <div className="name-input">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default NameInput;
