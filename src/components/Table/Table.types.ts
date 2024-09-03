import { ReactNode } from 'react';

export type TableProps = {
  values: Array<ReactNode[] | string[]>;
  cols: string[];
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  handleSetPageSize: (size: number) => void;
  handleSetCurrentPage: (page: number) => void;
};
