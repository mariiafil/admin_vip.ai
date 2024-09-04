import { FC, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { dataApi } from '../../store/data';

type CreateCategoryTrigger = ReturnType<typeof dataApi.useCreateCategoryMutation>[0];

const schema = yup
  .object({
    category: yup.string().min(2, 'Min length is 2').max(20, 'Max length is 20').required(),
  })
  .required();

export const CreateCategoryForm: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [createCategory] = dataApi.useCreateCategoryMutation();

  const handleCreateCategory = useCallback(
    async (createCategory: CreateCategoryTrigger, name: string) => {
      try {
        await createCategory({ name });
      } catch (e) {
        console.error('Could not create category', e);
      }
    },
    []
  );

  const onSubmit = useCallback(
    async (data: { category: string }) => {
      await handleCreateCategory(createCategory, data.category);
      reset();

      const closeBtn = document.getElementById('close-btn') as HTMLButtonElement;
      closeBtn.click();
    },
    [reset, createCategory]
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label className="form-label">Category</label>
        <input
          type="text"
          className={`form-control ${errors.category ? 'is-invalid' : ''}`}
          placeholder="Enter category"
          {...register('category', { required: true, maxLength: 20, minLength: 2 })}
        />
        {errors.category && (
          <div
            role="alert"
            className="invalid-feedback"
          >
            {errors.category?.message}
          </div>
        )}
      </div>
      <div className="d-flex justify-content-end">
        <button
          type="submit"
          className="btn btn-secondary"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
