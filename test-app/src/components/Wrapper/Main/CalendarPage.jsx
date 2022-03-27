import ErrorPage from './ErrorPage';

export default function CalendarPage() {
  const accountName = localStorage.getItem('name');

  if (!accountName) {
    return <ErrorPage />;
  }
}
