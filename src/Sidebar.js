import React from 'react';
import { FaHome, FaChartLine, FaCog } from 'react-icons/fa';


function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Hello User</h2>
      <ul>
        <li><button><i className="fa fa-home"></i><FaHome />   Home</button></li>
        <li><button><i className="fa fa-chart-line"></i><FaChartLine />   Summary</button></li>
        <li><button><i className="fa fa-cog"></i><FaCog />   Settings</button></li>
      </ul>
    </div>
  );
}

export default Sidebar;
