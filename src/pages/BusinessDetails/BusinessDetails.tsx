import { FC, useEffect, useMemo, useState } from 'react';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import { Table } from '../../components';
import { dataApi } from '../../store/data';
import { useParams } from 'react-router-dom';

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
      store?.name,
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
      <PageTitle title="All business" />
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
