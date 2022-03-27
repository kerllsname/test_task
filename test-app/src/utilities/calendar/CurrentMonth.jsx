export default function CurrentMonth() {
  let currentDateItem = localStorage.getItem('month');
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Nov',
    'Dec',
  ];

  if (!currentDateItem) {
    const currentDate = new Date();
    currentDateItem = currentDate.getMonth();
    localStorage.setItem('month', currentDateItem);
  }

  return (
    <div className="navigation__date">
      {months[currentDateItem]}
      , 2022
    </div>
  );
}
