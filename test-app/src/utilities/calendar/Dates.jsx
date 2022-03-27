/* eslint-disable no-lonely-if */
/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */

function addDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);
}

function createBlocks() {
  const currentDate = new Date();
  const daysNames = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  const date = new Date(2022, 2, 1);
  const firstDate = addDays(date, -date.getDate() - (date.getDay()) + 2);
  const arrayOfDates = [];
  const items = [];

  for (let i = 0; i < 35; i += 1) {
    arrayOfDates.push(addDays(firstDate, i));
  }

  console.log(arrayOfDates[34].getMonth() > currentDate.getMonth());

  for (let i = 0; i < 35; i += 1) {
    if (i <= 6) {
      if (arrayOfDates[i].getDate() < currentDate.getDate() || arrayOfDates[i].getMonth() < currentDate.getMonth()) {
        items.push(<div key={i} className="calendar__day calendar__unactive-date">{daysNames[i]}, {arrayOfDates[i].getDate()}</div>);
      } else if (arrayOfDates[i].getDate() === currentDate.getDate() && arrayOfDates[i].getMonth() === currentDate.getMonth()) {
        items.push(<div key={i} className="calendar__day calendar__current-date">{daysNames[i]}, {arrayOfDates[i].getDate()}</div>);
      } else if (arrayOfDates[i].getDate() > currentDate.getDate() || arrayOfDates[i].getMonth() > currentDate.getMonth()) {
        items.push(<div key={i} className="calendar__day calendar__active-date">{daysNames[i]}, {arrayOfDates[i].getDate()}</div>);
      }
    } else {
      if (arrayOfDates[i].getMonth() < currentDate.getMonth() || arrayOfDates[i].getDate() < currentDate.getDate()) {
        items.push(<div key={i} className="calendar__day calendar__unactive-date">{arrayOfDates[i].getDate()}</div>);
      } else if (arrayOfDates[i].getDate() === currentDate.getDate() && arrayOfDates[i].getMonth() === currentDate.getMonth()) {
        items.push(<div key={i} className="calendar__day calendar__current-date">{arrayOfDates[i].getDate()}</div>);
      } else if (arrayOfDates[i].getDate() > currentDate.getDate() || arrayOfDates[i].getMonth() > currentDate.getMonth()) {
        items.push(<div key={i} className="calendar__day calendar__active-date">{arrayOfDates[i].getDate()}</div>);
      }
    }
  }

  return items;
}

export default function Dates() {
  return createBlocks();
}
