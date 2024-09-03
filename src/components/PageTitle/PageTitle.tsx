import { FC } from 'react';
import { PageTitleProps } from './PageTitle.types';

export const PageTitle: FC<PageTitleProps> = ({ title }) => {
  return (
    <div className="my-4">
      <h2 className="page-title text-white">{title}</h2>
    </div>
  );
};
