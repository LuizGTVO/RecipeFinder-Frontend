import { NavLink } from "react-router";
import logo from "../assets/images/logo.svg";

function LinkClass({ isActive }) {
  return isActive
    ? "text-[#123c38] border-b-2 border-[#f4a261] "
    : "text-gray-600 hover:text-[#123c38]";
}
 function Header() {

  return (
    <header className="bg-[#f7f5f2] border-b border-gray-200">
      <div className="max-w-9xl mx-auto px-6 py-5 flex items-center justify-between">
        <img src={logo} alt="logo" />

        <nav className="flex items-center gap-8">
          <NavLink to="/" className={LinkClass}>Home</NavLink>
          <NavLink to="/about" className={LinkClass}>About</NavLink>
          <NavLink to="/recipes" className={LinkClass}>Recipes</NavLink>
        </nav>

        <button className="bg-[#123c38] text-white px-6 py-3 rounded-xl font-medium">
          Browse recipes
        </button>
      </div>
    </header>
  );
}

export default Header;