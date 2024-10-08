import { FC, PropsWithChildren } from 'react';
import { Navigation } from '../../components';

export const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="page bg-dark-custom">
      <aside className="border-secondary border-end navbar navbar-vertical navbar-expand-sm bg-dark-custom">
        <Navigation />
      </aside>
      <div className="page-wrapper min-vh-100 px-4 pb-4">{children}</div>
    </div>
  );
};
