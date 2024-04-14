import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/palindrome"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Palindrome
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/two"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Sum of Two
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/three"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Sum of Three
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reverse"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Reverse of String
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/factorial"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Factorial
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
