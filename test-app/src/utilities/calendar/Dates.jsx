/* eslint-disable no-lonely-if */
/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */

function addDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);
}

function createBlocks() {
  const month = localStorage.getItem('month');
  const daysNames = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  const currentDate = new Date();
  const date = new Date(2022, month, 1);
  const firstDate = addDays(date, -date.getDate() - (date.getDay()) + 2);
  const arrayOfDates = [];
  const items = [];

  for (let i = 0; i < 35; i += 1) {
    arrayOfDates.push(addDays(firstDate, i));
  }

  for (let i = 0; i < 35; i += 1) {
    if (i <= 6) {
      if (currentDate.getDate() === arrayOfDates[i].getDate() && currentDate.getMonth() === arrayOfDates[i].getMonth()) {
        items.push(<div key={i} className="calendar__day calendar__current-date">{daysNames[i]}, {arrayOfDates[i].getDate()}</div>);
      } else {
        items.push(<div key={i} className="calendar__day">{daysNames[i]}, {arrayOfDates[i].getDate()}</div>);
      }
    } else {
      if (currentDate.getDate() === arrayOfDates[i].getDate() && currentDate.getMonth() === arrayOfDates[i].getMonth()) {
        items.push(<div key={i} className="calendar__day calendar__current-date">{arrayOfDates[i].getDate()}</div>);
      } else {
        items.push(<div key={i} className="calendar__day">{arrayOfDates[i].getDate()}</div>);
      }
    }
  }

  return items;
}

export default function Dates() {
  return createBlocks();
}
