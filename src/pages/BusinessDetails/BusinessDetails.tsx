import { FC, useEffect, useMemo, useState } from 'react';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import { Select, Table } from '../../components';
import { dataApi } from '../../store/data';
import { useParams } from 'react-router-dom';
import { SearchIcon } from '../../icons/SearchIcon';

const BusinessDetails: FC = () => {
  const { id } = useParams();
  const [getStores, stores] = dataApi.useLazyGetStoresQuery();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(0);

  const handleSetPageSize = (num: number) => {
    if (num > 0 && num <= 100) {
      setPageSize(num);
    }
  };

  const handleSetcurrentPage = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const tableValues = useMemo(() => {
    const dataIsArray = Array.isArray(stores?.data?.[1]);
    if (!dataIsArray) {
      return [];
    }
    return stores.data?.[1]?.map((store) => [
      <div className="d-flex gap-3 align-items-center">
        <span className="avatar bg-green-lt">{store?.name?.[0]}</span>
        <div>
          <p>{store?.name}</p>
          <p>{store.id}</p>
        </div>
      </div>,
      'category',
      'group',
      'subcategory',
      'city',
      '21.09.2022',
    ]);
  }, [stores]);

  const handleGetStores = async () => {
    if (!id) {
      return;
    }

    try {
      const data = await getStores({
        page: currentPage,
        page_size: pageSize,
        id,
      });

      if (data?.data?.[0] && typeof data?.data?.[0] === 'number') {
        setTotalPages(Math.ceil(data?.data?.[0] / pageSize));
      }
    } catch (e) {
      console.error('COULD NOT GET STORES', e);
    }
  };

  useEffect(() => {
    handleGetStores();
  }, [pageSize, currentPage]);

  return (
    <div className="page">
      <div className="d-flex justify-content-between align-items-center">
        <PageTitle title="All business" />

        <div className="d-flex justify-content-end align-items-center gap-2">
          <div className="input-icon">
            <input
              type="text"
              value=""
              className="form-control form-control-rounded"
              placeholder="Search…"
            />
            <span className="input-icon-addon">
              <SearchIcon />
            </span>
          </div>
          <button className="btn btn-outline-primary">Bulk upload</button>
          <button className="btn btn-primary">Add business</button>
        </div>
      </div>
      <div className="d-flex mb-4 gap-2">
        <Select option="Category" />
        <Select option="Subcategory" />
        <Select option="Status" />
        <Select option="Country" />
        <Select option="City" />
        <Select option="Date registered" />

        <button className="btn btn-outline-light border-0">Clear all</button>
      </div>
      <Table
        cols={['Company', 'Category', 'Group', 'Subcategory', 'City/Country', 'Date Registered']}
        currentPage={currentPage}
        itemsPerPage={pageSize}
        totalPages={totalPages}
        values={tableValues ?? []}
        handleSetCurrentPage={handleSetcurrentPage}
        handleSetPageSize={handleSetPageSize}
      />
    </div>
  );
};

export default BusinessDetails;
