import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './commonRoutes';
import { DashboardLayout } from '../layouts';

export const App: FC = () => {
  return (
    <Suspense fallback={<div>loading TODO</div>}>
      <Routes>
        {routes.map((route, index) => (
          <Route
            {...route}
            key={`r_${index}_${route.path}`}
            element={<DashboardLayout>{route.element}</DashboardLayout>}
          />
        ))}
      </Routes>
    </Suspense>
  );
};
