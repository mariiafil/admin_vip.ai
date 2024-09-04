import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { MenuItemProps } from './MenuItem.types';

export const MenuItem: FC<MenuItemProps> = ({ link, icon, text }) => {
  const location = useLocation();
  const isActive = link === location.pathname && link.length > 1;

  return (
    <li className={`nav-item ${isActive ? 'nav-item-active' : ''} container-fluid rounded pl-0`}>
      <a
        className="nav-link py-2"
        href={link}
      >
        <span className="nav-link-icon d-lg-inline-block">{icon}</span>
        <span className="nav-link-title">{text}</span>
      </a>
    </li>
  );
};
