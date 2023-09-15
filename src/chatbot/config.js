import { createChatBotMessage } from 'react-chatbot-kit';
import {
  AgeDropdown,
  GotItButton,
  NameInput,
  CalendarSlot,
  ScheduleButton,
  Session,
} from '../components';

const config = {
  initialMessages: [
    createChatBotMessage('Hello, Welcome to student info system!', {
      delay: 1000,
      widget: 'gotItButton',
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: 'rgb(22, 152, 204)',
    },
    chatButton: {
      backgroundColor: 'rgb(22, 152, 204)',
    },
    backgroundColor: 'blue',
  },
  widgets: [
    {
      widgetName: 'gotItButton',
      widgetFunc: (props) => <GotItButton {...props} />,
      mapStateToProps: ['messages'],
    },
    {
      widgetName: 'scheduleButton',
      widgetFunc: (props) => <ScheduleButton {...props} />,
      mapStateToProps: ['messages'],
    },
    {
      widgetName: 'session',
      widgetFunc: (props) => <Session {...props} />,
      mapStateToProps: ['messages'],
    },
    {
      widgetName: 'calendarSlot',
      widgetFunc: (props) => <CalendarSlot {...props} />,
      mapStateToProps: ['messages'],
    },
    {
      widgetName: 'nameInput',
      widgetFunc: (props) => <NameInput {...props} />,
      mapStateToProps: ['messages'],
    },
    {
      widgetName: 'ageDropdown',
      widgetFunc: (props) => <AgeDropdown {...props} />,
      mapStateToProps: ['messages'],
    },
  ],
};

export default config;
