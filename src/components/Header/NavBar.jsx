import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/images/logo.png";

export const NavBar = ({
  toggleMenu,
  className = "",
  classLogo,
  classList,
  classItem = "",
}) => {
  return (
    <nav className={className}>
      <Link to="/" className={classLogo}>
        <img src={logo} alt="logotype" width="32" height="32" />
        Nanny.Services
      </Link>

      <ul className={classList}>
        <li onClick={toggleMenu}>
          <NavLink to="/" className={classItem}>
            Home
          </NavLink>
        </li>
        <li onClick={toggleMenu}>
          <NavLink to="/nannies" className={classItem}>
            Nannies
          </NavLink>
        </li>
        <li onClick={toggleMenu}>
          <NavLink to="/favorites" className={classItem}>
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
