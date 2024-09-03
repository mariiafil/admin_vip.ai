import { ReactNode } from 'react';
import { AppRouteEnum, LayoutEnum } from './paths';

export interface RouteType {
  element: ReactNode;
  path: AppRouteEnum;
  layout: LayoutEnum;
}
