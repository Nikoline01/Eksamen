import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/">NIKOLINE HOLM</NavLink>
      <div className="navbar-items">
        <NavLink to="/Project">PROJECTS</NavLink>
      </div>
    </nav>
  );
}
