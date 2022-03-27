import ErrorPage from './ErrorPage';
import CurrentMonth from '../../../utilities/calendar/CurrentMonth';
import Dates from '../../../utilities/calendar/Dates';

export default function CalendarPage() {
  const accountName = localStorage.getItem('name');

  if (!accountName) {
    return <ErrorPage />;
  }

  return (
    <main className="calendar">
      <div className="calendar__menu">
        <div className="menu__buttons">
          <button type="button">Add</button>
          <button type="button">Refresh</button>
        </div>
        <div className="menu__search">
          <input type="text" />
        </div>
      </div>
      <div className="calendar_navigation">
        <button type="button" className="navigation__button">
          ᐸ
        </button>
        <CurrentMonth />
        <button type="button" className="navigation__button">
          ᐳ
        </button>
      </div>
      <div className="calendar__calendar">
        <Dates />
      </div>
    </main>
  );
}
