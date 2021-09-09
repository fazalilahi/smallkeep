import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between p-1 pl-1">
      <Link to="/">
        <span className="flex p-2 pl-1 sm:pl-4">
          <img
            src="/images/smallkeep.svg"
            alt="application logo"
            className="px-2"
          />
          <h1 className="text-xl text-blue-500">SmallKeep</h1>
        </span>
      </Link>
      <span className="flex items-center p-1 px-4 text-xs font-thin hover:bg-blue-50 rounded-md group">
        <Link to="/search">
          <img src="/images/search.svg" alt="search icon" className="px-2" />
          <button className="text-bg-gray-200 group-hover:text-blue-400">
            search
          </button>
        </Link>
      </span>
    </nav>
  );
};

export default Navbar;
