import sexy from './Header.module.scss';
import logo from '../../assets/logo.png';

function Header() {
  return (
    <div>
      <header className={sexy.header}>
        <a href="/">
          <img src={logo} alt="logo" className={sexy.logo} />
        </a>
        <a href="/" className={sexy.topic}>
          ROAD <span>of the</span> DREAM
        </a>
        <div className={sexy.headRight}>
          <a href="/companies">Компании</a>
          <a href="https://rt.pornhub.com/">Активисты</a>
          <a href="/auth">Профиль</a>
        </div>
      </header>
    </div>
  );
}

export default Header;
