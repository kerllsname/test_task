export default function Header() {
  let accountName = localStorage.getItem('name');

  if (!accountName) {
    accountName = <a href="/login">log in</a>;
  }

  return (
    <header>
      <div className="header__empty" />
      <div className="header__title">Test App</div>
      <div className="header__account">{accountName}</div>
    </header>
  );
}
