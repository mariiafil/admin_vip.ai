import { FC } from 'react';
import { DashboardIcon } from '../../icons/DashboardIcon';
import { BusinessIcon } from '../../icons/BusinessIcon';
import { AppRouteEnum } from '../../types';
import { MenuItem } from './MenuItem/MenuItem';
import './Menu.css';

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
