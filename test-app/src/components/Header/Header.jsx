export default function Header() {
  const pageTitle = ' main ';

  return (
    <header>
      <div className="header__page-title">
        You are now on the
        { pageTitle }
        page
      </div>
    </header>
  );
}
