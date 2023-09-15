import { Route, Routes } from 'react-router-dom';
import { ChatbotPage, EnrollStudentPage, EnrolledStudentPage } from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<EnrollStudentPage />} />
        <Route path="/chatbot" element={<ChatbotPage />} />
        <Route path="/enrolledStudent" element={<EnrolledStudentPage />} />
      </Routes>
    </div>
  );
}

export default App;
