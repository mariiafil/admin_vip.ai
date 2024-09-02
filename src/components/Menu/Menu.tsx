import { FC, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { DashboardIcon } from '../../icons/DashboardIcon';
import { BusinessIcon } from '../../icons/BusinessIcon';
import { AppRouteEnum } from '../../types';
import './Menu.css';

const MenuItem: FC<{
  link: string;
  icon: ReactNode;
  text: string;
}> = ({ link, icon, text }) => {
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

export const Menu: FC = () => {
  return (
    <div className="p-2">
      <div className="container-fluid mb-3 pl-4">
        <a href={AppRouteEnum.MAIN}>
          <h1 className="navbar-brand text-primary">VIP.AI</h1>
        </a>
        <div className="status bg-primary mx-3">Admin</div>
      </div>
      <ul className="nav">
        <MenuItem
          link={AppRouteEnum.MAIN}
          icon={<DashboardIcon />}
          text="Dashboard"
        />
        <MenuItem
          link={AppRouteEnum.MAIN}
          icon={<DashboardIcon />}
          text="Analytics"
        />
        <MenuItem
          link={AppRouteEnum.BUSINESS}
          icon={<BusinessIcon />}
          text="Business"
        />
      </ul>
    </div>
  );
};
