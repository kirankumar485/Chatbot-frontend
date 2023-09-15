import React from 'react';
import { createClientMessage } from 'react-chatbot-kit';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveStudentInfo } from '../slices/StudentSlice';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleGotIt = () => {
    const botMessage = createClientMessage('Got it', {});

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));

    handleSchedule();
  };
  const handleSchedule = () => {
    const botMessage = createChatBotMessage('Do you want a reschedule?', {
      delay: 1000,
      widget: 'scheduleButton',
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleSession = () => {
    const botMessage = createChatBotMessage('How do you want your session?', {
      delay: 1000,
      widget: 'session',
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleName = () => {
    const botMessage = createChatBotMessage('Pick a slot', {
      delay: 1000,
      widget: 'calendarSlot',
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleEnterName = () => {
    const botMessage = createChatBotMessage('Enter Your Name', {
      delay: 1000,
      widget: 'nameInput',
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleEnterAge = () => {
    const botMessage = createChatBotMessage('Enter Your Age', {
      delay: 1000,
      widget: 'ageDropdown',
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleStudentEnrollment = () => {
    const botMessage = createChatBotMessage(
      'Thank you. In 5 seconds bot will exit.'
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
    let count = 5;

    setInterval(() => {
      const countMessage = createChatBotMessage(`${count--}...`);

      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, countMessage],
      }));
    }, 1000);

    dispatch(saveStudentInfo());

    setTimeout(() => {
      navigate('/enrolledStudent');
    }, 6000);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleGotIt,
            handleSchedule,
            handleSession,
            handleName,
            handleEnterName,
            handleEnterAge,
            handleStudentEnrollment,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
