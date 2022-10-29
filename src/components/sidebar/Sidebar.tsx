import React, { FC } from 'react';
import './Sidebar.styles.css';

const Sidebar: FC = () => {
  return (
    <>
      <div className="Sidebar">
        <div className="ProjectName">
          <input type="text" placeholder="Project Name" />
        </div>

        <div className="Steps">Steps:</div>

        <ul className="SidebarList">
          <li className="row">
            <div className="title">Blur</div>
            <div className="title">Edge Detection</div>
            <div className="title">Region of Interest (ROI)</div>
            <div className="title">Transform</div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
