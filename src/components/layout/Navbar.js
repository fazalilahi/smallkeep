import { Link } from "react-router-dom";

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
      <span className="group flex items-center p-1 px-4 hover:bg-blue-50 rounded-md group">
        <Link to="/search">
          {/* <img src="/images/search.svg" alt="search icon" className="px-2" /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 group-hover:text-blue-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          {/* <button className="text-bg-gray-200 group-hover:text-blue-400">
            search
          </button> */}
        </Link>
      </span>
    </nav>
  );
};

export default Navbar;
