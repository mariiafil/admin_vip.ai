import { FC, useEffect } from 'react';
import { dataApi } from '../../store/data';

const Business: FC = () => {
  const [getCategories, categories] = dataApi.useLazyGetCategoriesQuery();

  const handleGetCategories = async () => {
    try {
      await getCategories(null);
    } catch (e) {
      console.error('COULD NOT GET CATEGORIES', e);
    }
  };

  console.log(categories);

  useEffect(() => {
    handleGetCategories();
  }, []);

  return (
    <div className="page">
      <div className="page-header">
        <div className="container-xl">
          <div className="row g-2 align-items-center">
            <div className="col">
              <h2 className="page-title text-white">Categories</h2>
            </div>
          </div>
        </div>
      </div>
      {categories?.data?.map((item) => (
        <div
          className="text-white"
          key={item.id}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Business;
