import sexy from './Header.module.scss';
import logo from '../../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
      <header className={sexy.header}>
        <img src={logo} alt="logo" className={sexy.logo} />
        <div className={sexy.headRight}>
          <Link to="/compains">Компании</Link>
          <Link to="/map">Карта</Link>
          <Link to="/profile">Профиль</Link>
          <NavLink to="/">Home</NavLink>
        </div>
      </header>
    </div>
  );
}

export default Header;
