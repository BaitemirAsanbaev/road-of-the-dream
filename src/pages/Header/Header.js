import cl from './Header.module.scss';
import logo from '../../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
      <header className={cl.header}>
        <a href="/">
          <img src={logo} alt="logo" className={cl.logo} />
        </a>
        <div className={cl.headRight}>
          <Link to="/map">Карта</Link>
          <Link to="/profile">Профиль</Link>
          <NavLink to="/">Home</NavLink>
        </div>
      </header>
    </div>
  );
}

export default Header;
