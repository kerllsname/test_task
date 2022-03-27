import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
import CalendarPage from './CalendarPage';
import LoginPage from './LoginPage';
import AboutPage from './AboutPage';

function temp(loggedIn) {
  console.log(loggedIn);
  return <ProfilePage />;
}

export default function RouterPage() {
  const loggedIn = localStorage.getItem('name');

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/profile"
          element={
            loggedIn ? (
              temp(loggedIn)
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </main>
  );
}
