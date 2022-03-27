import ErrorPage from './ErrorPage';

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
        <button type="button" className="navigation__button">ᐸ</button>
        <div className="navigation__date">2022</div>
        <button type="button" className="navigation__button">ᐳ</button>
      </div>
      <div className="calendar__calendar">
        <div>Monday, </div>
        <div>Tuesday, </div>
        <div>Wednesday, </div>
        <div>Thursday, </div>
        <div>Friday, </div>
        <div>Saturday, </div>
        <div>Sunday, </div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
      </div>
    </main>
  );
}
