import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
import CalendarPage from './CalendarPage';
// import AboutPage from './AboutPage';

export default function RouterPage() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
      </Routes>
    </main>
  );
}
