'use client';
import Link from 'next/link';
import Courses from './components/courses';
import { useEffect, useState } from 'react';
import LoadingPage from './loading';
import CouseSearch from './components/courseSearch';

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('/api/courses');
      const courses = await response.json();
      setCourses(courses);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  if (loading) return <LoadingPage />;

  return (
    <div>
      <h1>Welcome</h1>
      <CouseSearch getSearchResults={(courses) => setCourses(courses)} />
      <Courses courses={courses} />
    </div>
  );
};

export default HomePage;
