import { FC } from 'react';
import { PageTitleProps } from './PageTitle.types';

export const PageTitle: FC<PageTitleProps> = ({ title }) => {
  return (
    <div className="page-header mb-5">
      <div className="container-xl">
        <div className="row g-2 align-items-center">
          <div className="col">
            <h2 className="page-title text-white">{title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
