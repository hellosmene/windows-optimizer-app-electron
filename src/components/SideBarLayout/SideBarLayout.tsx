import { Outlet } from 'react-router-dom';

import SideBar from '../SideBar/SideBar';
import './SideBarLayout.css';

const SideBarLayout = () => (
  <div className="side-bar-layout">
    <SideBar />
    <Outlet />
  </div>
);

export default SideBarLayout;