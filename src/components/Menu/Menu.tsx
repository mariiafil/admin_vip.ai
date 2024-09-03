import { FC } from 'react';
import { DashboardIcon } from '../../icons/DashboardIcon';
import { BusinessIcon } from '../../icons/BusinessIcon';
import { AppRouteEnum } from '../../types';
import { MenuItem } from './MenuItem/MenuItem';
import './Menu.css';
import { AnalyticsIcon } from '../../icons/AnalyticsIcon';
import { RefundsIcon } from '../../icons/RefundsIcon';
import { ReportsIcon } from '../../icons/ReportsIcon';
import { PaymentIcon } from '../../icons/PaymentIcon';
import { UserIcon } from '../../icons/UsersIcon';
import { SettingsIcon } from '../../icons/SettingsIcon';

export const Menu: FC = () => {
  return (
    <div className="p-2 pt-3">
      <div className="d-flex px-3 align-items-center mb-3 gap-3">
        <a href={AppRouteEnum.MAIN}>
          <h1 className="text-main fs-4 m-0">VIP.AI</h1>
        </a>
        <div className="status status-bg-primary m-0">Admin</div>
      </div>
      <ul className="nav">
        <MenuItem
          link={AppRouteEnum.MAIN}
          icon={<DashboardIcon />}
          text="Dashboard"
        />
        <MenuItem
          link={AppRouteEnum.MAIN}
          icon={<AnalyticsIcon />}
          text="Analytics"
        />
        <MenuItem
          link={AppRouteEnum.BUSINESS}
          icon={<BusinessIcon />}
          text="Business"
        />
        <MenuItem
          link={AppRouteEnum.MAIN}
          icon={<RefundsIcon />}
          text="Refunds"
        />
        <MenuItem
          link={AppRouteEnum.MAIN}
          icon={<ReportsIcon />}
          text="Reports"
        />
        <MenuItem
          link={AppRouteEnum.MAIN}
          icon={<UserIcon />}
          text="Users"
        />
        <MenuItem
          link={AppRouteEnum.MAIN}
          icon={<PaymentIcon />}
          text="Payments"
        />
        <MenuItem
          link={AppRouteEnum.MAIN}
          icon={<SettingsIcon />}
          text="Settings"
        />
      </ul>
    </div>
  );
};
