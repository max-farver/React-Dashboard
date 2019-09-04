import React from "react";
import {
  FaHome,
  FaChartLine,
  FaCheckSquare,
  FaNewspaper
} from "react-icons/fa";

export const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar-item">
        <span>
          <FaHome />
        </span>
      </div>
      <div className="sidebar-item">
        <span>
          <FaChartLine />
        </span>
      </div>
      <div className="sidebar-item">
        <span>
          <FaCheckSquare />
        </span>
      </div>
      <div className="sidebar-item">
        <span>
          <FaNewspaper />
        </span>
      </div>
    </nav>
  );
};
