import { FC, PropsWithChildren } from 'react';
import { Menu } from '../../components';
import './DashboardLayout.css';

export const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="page bg-dark-custom">
      <aside className="navbar navbar-vertical navbar-expand-sm bg-dark-custom">
        <Menu />
      </aside>
      <div className="page-wrapper">{children}</div>
    </div>
  );
};
