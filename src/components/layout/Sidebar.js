import { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const toggleShow = (e) => {
    setShow(!show);
  };

  return (
    <div>
      <div className="absolute">
        <button
          onClick={(e) => toggleShow(e)}
          className="absolute left-0 top-0 w-16 flex justify-center pt-4 z-20 "
        >
          <img src="/images/menu.svg" alt="hamburger menu icon" />
        </button>

        {show ? (
          <div className="">
            <div className="flex flex-col justify-between bg-gray-50 pt-16 w-40 z-10 absolute h-screen shadow-2xl">
              <div>
                <div className="flex items-center">
                  <Link to="/" className="w-16 flex justify-center">
                    <img
                      src="/images/notes.svg"
                      alt="note icon"
                      className="py-2"
                    />
                  </Link>
                  <div>
                    <Link to="/">Notes</Link>
                  </div>
                </div>
                <div className="flex items-center">
                  <Link to="/archive" className="w-16 flex justify-center">
                    <img
                      src="/images/archive.svg"
                      alt="archive icon"
                      className="py-2"
                    />
                  </Link>
                  <div>
                    <Link to="/archive">Archive</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-16 h-screen"></div>
          </div>
        ) : (
          //hide
          <div className="absolute flex flex-col justify-between bg-gray-50 pt-16 h-screen">
            <div>
              <div className="flex items-center">
                <Link to="/" className="w-16 flex justify-center">
                  <img
                    src="/images/notes.svg"
                    alt="note icon"
                    className="py-2"
                  />
                </Link>
              </div>
              <div className="flex items-center">
                <Link to="/archive" className="w-16 flex justify-center">
                  <img
                    src="/images/archive.svg"
                    alt="archive icon"
                    className="py-2"
                  />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
