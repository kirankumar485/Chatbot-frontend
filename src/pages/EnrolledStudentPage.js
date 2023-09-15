import { useSelector } from 'react-redux';

function EnrolledStudentPage() {
  const {
    currentStudent: { name, age },
  } = useSelector((state) => state.student);

  return (
    <div className="enrolled-student-page">
      <p>
        Your name is {name} aged {age}. Your Information has been added to the
        student system. You may now exit.
      </p>
    </div>
  );
}

export default EnrolledStudentPage;
