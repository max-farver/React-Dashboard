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
      <div className="sidebar--item">
        <span>
          <FaHome size={50}/>
        </span>
      </div>
      <div className="sidebar--item">
        <span>
          <FaChartLine size={50}/>
        </span>
      </div>
      <div className="sidebar--item">
        <span>
          <FaCheckSquare size={50}/>
        </span>
      </div>
      <div className="sidebar--item">
        <span>
          <FaNewspaper size={50}/>
        </span>
      </div>
    </nav>
  );
};
