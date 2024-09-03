import { lazy } from 'react';
import { AppRouteEnum, LayoutEnum, RouteType } from '../types';

const MainPage = lazy(() => import('../pages/Main/Main'));
const BusinessPage = lazy(() => import('../pages/Business/Business'));
const BusinessDetailsPage = lazy(() => import('../pages/BusinessDetails/BusinessDetails'));

export const routes: Array<RouteType> = [
  {
    element: <MainPage />,
    path: AppRouteEnum.MAIN,
    layout: LayoutEnum.DEFAULT,
  },
  {
    element: <BusinessPage />,
    path: AppRouteEnum.BUSINESS,
    layout: LayoutEnum.DEFAULT,
  },
  {
    element: <BusinessDetailsPage />,
    path: AppRouteEnum.BUSINESS_DETAILS,
    layout: LayoutEnum.DEFAULT,
  },
];
