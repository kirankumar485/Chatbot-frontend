import { useNavigate } from 'react-router-dom';

function EnrollStudentPage() {
  const navigate = useNavigate();

  return (
    <div className="enroll-student-page">
      <p>Enter Into Student Info System</p>
      <button type="button" onClick={() => navigate('/chatbot')}>
        Enroll Now!
      </button>
    </div>
  );
}

export default EnrollStudentPage;
