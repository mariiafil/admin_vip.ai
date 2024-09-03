import { FC, useCallback, useEffect, useState } from 'react';
import { dataApi } from '../../store/data';
import { AppRouteEnum } from '../../types';
import { Modal } from '../../components';
import { CreateCategoryForm } from '../../forms';
import { PageTitle } from '../../components/PageTitle/PageTitle';

const Business: FC = () => {
  const [getCategories, categories] = dataApi.useLazyGetCategoriesQuery();
  const [loading, setLoading] = useState(false);

  const handleGetCategories = useCallback(async () => {
    try {
      setLoading(true);
      await getCategories(null);
    } catch (e) {
      console.error('COULD NOT GET CATEGORIES', e);
    } finally {
      setLoading(false);
    }
  }, [getCategories, setLoading]);

  useEffect(() => {
    handleGetCategories();
  }, []);

  return (
    <div className="page">
      <PageTitle title="Categories" />
      {loading && (
        <div
          className="spinner-border text-green mx-auto"
          role="status"
        ></div>
      )}
      <div className="btn-group-vertical w-50 mx-auto">
        {categories?.data?.map((item) => (
          <a
            key={item.id}
            href={`${AppRouteEnum.BUSINESS}/${item.id}`}
            className="btn btn-light rounded border border-secondary mb-1"
          >
            {item.name}
          </a>
        ))}
        <button
          className="btn btn-secondary rounded mt-3"
          data-bs-toggle="modal"
          data-bs-target="#modal"
        >
          Create category
        </button>
      </div>
      <Modal title="Create category">
        <CreateCategoryForm />
      </Modal>
    </div>
  );
};

export default Business;
