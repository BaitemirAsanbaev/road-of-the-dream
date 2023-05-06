import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav style={{
        background:"tomato"
    }}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/auth">Auth</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
