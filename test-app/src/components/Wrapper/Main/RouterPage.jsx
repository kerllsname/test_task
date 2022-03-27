import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
// import AboutPage from './AboutPage';

export default function RouterPage() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
      </Routes>
    </main>
  );
}
