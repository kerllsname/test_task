/* eslint-disable no-lonely-if */

import ErrorPage from './ErrorPage';
import CurrentMonth from '../../../utilities/calendar/CurrentMonth';
import Dates from '../../../utilities/calendar/Dates';

function hanlder({ currentTarget: button }) {
  const currentMonth = Number(localStorage.getItem('month'));
  const leftButton = document.querySelector('.navigation__button-left');
  const rightButton = document.querySelector('.navigation__button-right');

  if (button.innerHTML === 'ᐸ') {
    if (currentMonth === 0) {
      button.setAttribute('disabled', 'disabled');
    } else {
      rightButton.removeAttribute('disabled');
      localStorage.setItem('month', currentMonth - 1);
      window.location.href = '/calendar';
    }
  } else {
    if (currentMonth === 10) {
      button.setAttribute('disabled', 'disabled');
    } else {
      leftButton.removeAttribute('disabled');
      localStorage.setItem('month', currentMonth + 1);
      window.location.href = '/calendar';
    }
  }
}

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
          <input placeholder="Event, date or participant" type="text" />
        </div>
      </div>
      <div className="calendar_navigation">
        <button type="button" className="navigation__button-left" onClick={hanlder}>
          ᐸ
        </button>
        <CurrentMonth />
        <button type="button" className="navigation__button-right" onClick={hanlder}>
          ᐳ
        </button>
      </div>
      <div className="calendar__calendar">
        <Dates />
      </div>
    </main>
  );
}
