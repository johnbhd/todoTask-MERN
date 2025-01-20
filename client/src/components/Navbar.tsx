import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ( {darkMode, toggleDarkMode} ) => {

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-[1400px] mx-auto px-5 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-lg font-bold text-gray-800">
          <h1 className="text-[5vh]">Todo Task</h1>
        </Link>

        {/* Dark Mode Icon */}
        <div
          className={`text-[4vh] cursor-pointer transition duration-300 ${
            darkMode ? "text-gray-600 hover:text-gray-800" : "text-gray-600 hover:text-gray-800"
          }`}
          onClick={toggleDarkMode}
        >
          <FontAwesomeIcon icon={darkMode ? faSun: faMoon} />

        </div>
      </div>
    </header>
  );
};

export default Navbar;
