import { NavLink } from 'react-router-dom';

import ChevronIcon from '../ChevronIcon/ChevronIcon';
import './NavItem.css';

type NavItemProps = {
  to: string,
  title: string
};

const NavItem = ({ to, title }: NavItemProps) => (
  <NavLink 
    className={({ isActive }) => (
      isActive ? 'clickable-card nav-item' : 'clickable-card nav-item nav-item--not-active'
    )}
    to={to}
  >
    <span className='nav-item__title'>{title}</span>
    <ChevronIcon />
  </NavLink>
);

export default NavItem;