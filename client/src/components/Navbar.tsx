import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-[1400px] mx-auto px-5 py-3 flex items-center justify-between">
        <Link to="/" className="text-lg font-bold text-gray-800">
          <h1 className="text-[5vh]">Todo Task</h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
