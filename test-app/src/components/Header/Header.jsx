import { Link } from 'react-router-dom';

export default function Header() {
  let accountName = localStorage.getItem('name');

  if (!accountName) {
    accountName = <Link to="/login">log in</Link>;
  }

  return (
    <header>
      <div className="header__empty" />
      <div className="header__title">Test App</div>
      <div className="header__account">{accountName}</div>
    </header>
  );
}
