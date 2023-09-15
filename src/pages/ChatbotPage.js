import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import { ActionProvider, MessageParser, config } from '../chatbot';

function ChatbotPage() {
  return (
    <div className="chatbot">
      <Chatbot
        headerText="Student Chatbot"
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default ChatbotPage;
