import { FC } from 'react';
import { SelectControlProps } from './SelectControl.types';
import './selectControl.css';

export const SelectControl: FC<SelectControlProps> = ({ options, onChange, value }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="form-select bg-black text-white custom-select border-secondary"
    >
      {options.map((option) => (
        <>
          <option value={option.value}>{option.title}</option>
        </>
      ))}
    </select>
  );
};
