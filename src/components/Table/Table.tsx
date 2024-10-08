import { ChangeEvent, FC } from 'react';
import { ArrorNextIcon } from '../../icons/ArrorNextIcon';
import { ArrorPrevIcon } from '../../icons/ArrorPrevIcon';
import { TableProps } from './Table.types';
import { SelectControl } from '../SelectControl/SelectControl';

export const Table: FC<TableProps> = ({
  cols,
  values,
  currentPage,
  totalPages,
  itemsPerPage,
  totalElements,
  handleSetPageSize,
  handleSetCurrentPage,
}) => {
  const paginationArr: number[] | undefined[] = Array(totalPages).fill(1);
  const onPageSizeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    handleSetPageSize(Number(e.target.value));
    handleSetCurrentPage(1);
  };

  const onPageSet = (num: number) => () => {
    handleSetCurrentPage(num);
  };

  return (
    <div className="col-12 bg-dark">
      <div className="card bg-dark border-secondary">
        <div className="table-responsive bg-dark">
          <table className="table card-table table-vcenter table-hover table-responsive table-bordered text-nowrap table-striped datatable table-dark">
            <thead className="bg-info">
              <tr>
                {cols.map((col) => (
                  <th
                    className="bg-black text-white"
                    key={col}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {values.map((row, i) => (
                <tr key={i}>
                  {row.map((content, i) => (
                    <td key={i}>{content}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="card-footer d-flex align-items-center bg-black">
          <div className="text-white">
            <div className="mx-2 d-flex align-items-center gap-3 flex-wrap">
              <span>
                {`Showing ${currentPage * itemsPerPage - itemsPerPage + 1} to ${currentPage * itemsPerPage} of ${totalElements}`}
              </span>
              <SelectControl
                value={itemsPerPage}
                onChange={onPageSizeChange}
                options={[
                  {
                    title: '10',
                    value: 10,
                  },
                  {
                    title: '15',
                    value: 15,
                  },
                  {
                    title: '20',
                    value: 20,
                  },
                ]}
              />
            </div>
          </div>
          <ul className="pagination m-0 ms-auto flex-wrap">
            <li className={`page-item ${currentPage === 1}`}>
              <button
                className="page-link"
                tabIndex={-1}
                disabled={currentPage === 1}
                onClick={onPageSet(currentPage - 1)}
              >
                <ArrorPrevIcon />
              </button>
            </li>
            {paginationArr.map((_item, index) => (
              <li
                className="page-item"
                key={index}
              >
                <button
                  className={`page-link ${index + 1 === currentPage ? 'active' : ''}`}
                  onClick={onPageSet(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li className={`page-item ${currentPage === totalPages}`}>
              <button
                className="page-link"
                disabled={currentPage === totalPages}
                onClick={onPageSet(currentPage + 1)}
              >
                <ArrorNextIcon />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
