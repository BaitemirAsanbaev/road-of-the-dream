import sexy from './Header.module.scss';
import logo from '../../assets/logo.png';

function Header() {
  return (
    <div>
      <header className={sexy.header}>
        <img src={logo} alt="logo" className={sexy.logo} />
        <div className={sexy.headRight}>
          <a href="/compains">Компании</a>
          <a href="https://rt.pornhub.com/">Активисты</a>
          <a href="/auth">Профиль</a>
        </div>
      </header>
    </div>
  );
}

export default Header;
