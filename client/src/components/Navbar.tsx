import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const darkmode = <FontAwesomeIcon icon={faMoon} />;

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-[1400px] mx-auto px-5 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-lg font-bold text-gray-800">
          <h1 className="text-[5vh]">Todo Task</h1>
        </Link>

        {/* Dark Mode Icon */}
        <div className="text-[4vh] text-gray-600 cursor-pointer hover:text-gray-800 transition duration-300">
          {darkmode}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
