import { Link } from "react-router-dom";

import "../../styles/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-nav">
        <li className="sidebar-item">
          <div className="sidebar-link">
            <img
              src="/images/double-arrow.svg"
              alt="arrow icon"
              className="logo"
            />
          </div>
        </li>
        <li className="sidebar-item">
          <Link to="/" className="sidebar-link">
            <img src="/images/notes.svg" alt="note icon" />
            <span className="link-text">Notes</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/archive" className="sidebar-link">
            <img src="/images/archive.svg" alt="archive icon" />
            <span className="link-text">Archive</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
