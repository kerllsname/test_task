export default function CurrentMonth() {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
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

  return (
    <div className="navigation__date">
      {months[currentMonth]}
      , 2022
    </div>
  );
}
