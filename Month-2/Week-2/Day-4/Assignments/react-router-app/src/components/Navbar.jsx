import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="flex justify-center gap-6 text-white font-semibold">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-yellow-300" : ""
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-yellow-300" : ""
          }
        >
          About
        </NavLink>

        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "text-yellow-300" : ""
          }
        >
          Services
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-yellow-300" : ""
          }
        >
          Contact
        </NavLink>

      </div>
    </nav>
  );
}