export default function LoginPage() {
  function handler() {
    const login = document.querySelector('.login-input');
    const password = document.querySelector('.password-input');
    const error = document.querySelector('.field__error');

    if (login.value === 'Admin' && password.value === '12345678') {
      localStorage.setItem('name', 'Admin');
      window.location.href = '/profile';
    } else {
      error.innerHTML = 'The username or password is entered incorrectly';
    }
  }

  return (
    <main className="login">
      <div className="login__title">Enter login and password</div>
      <div className="login__field">
        <div className="field__login-title">Login</div>
        <input type="login" className="login-input" />
        <div className="field__password-title">Password</div>
        <input type="password" className="password-input" />
        <button type="submit" onClick={handler}>
          submit
        </button>
        <div className="field__error" />
      </div>
    </main>
  );
}
