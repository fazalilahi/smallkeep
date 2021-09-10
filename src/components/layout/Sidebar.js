import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const toggleShow = (e) => {
    setShow(!show);
  };

  return (
    <div>
      <div className="absolute z-10">
        <button
          onClick={(e) => toggleShow(e)}
          className="absolute left-0 top-0 w-16 flex justify-center py-2  z-20 "
        >
          <div className="hover:bg-blue-100 rounded-full h-10 w-10 flex items-center justify-center">
            <img src="/images/menu.svg" alt="hamburger menu icon" />
          </div>
        </button>

        {show ? (
          <div className="">
            <div className="flex flex-col justify-between bg-gray-50 pt-16 w-40 z-10 absolute h-screen shadow-2xl">
              <div>
                <div className="flex items-center">
                  <Link to="/" className="w-16 flex justify-center">
                    <div className="hover:bg-gray-100 rounded-full h-10 w-10 flex items-center justify-center">
                      <img
                        src="/images/notes.svg"
                        alt="note icon"
                        className="py-2"
                      />
                    </div>
                  </Link>
                  <div>
                    <Link to="/">Notes</Link>
                  </div>
                </div>
                <div className="flex items-center">
                  <Link to="/archive" className="w-16 flex justify-center">
                    <div className="hover:bg-gray-100 rounded-full h-10 w-10 flex items-center justify-center">
                      <img
                        src="/images/archive.svg"
                        alt="archive icon"
                        className="py-2"
                      />
                    </div>
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
                  <div className="hover:bg-gray-100 rounded-full h-10 w-10 flex items-center justify-center">
                    <img
                      src="/images/notes.svg"
                      alt="note icon"
                      className="py-2"
                    />
                  </div>
                </Link>
              </div>
              <div className="flex items-center">
                <Link to="/archive" className="w-16 flex justify-center">
                  <div className="hover:bg-gray-100 rounded-full h-10 w-10 flex items-center justify-center">
                    <img
                      src="/images/archive.svg"
                      alt="archive icon"
                      className="py-2"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      {show && <div onClick={toggleShow} className="absolute inset-0"></div>}
    </div>
  );
};

export default Sidebar;
