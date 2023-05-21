import Link from 'next/link';
import Courses from './components/courses';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <Courses />
    </div>
  );
};

export default HomePage;
