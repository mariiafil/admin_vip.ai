import { FC } from 'react';
import './select.css';

export const Select: FC<{ option: string }> = ({ option }) => {
  return (
    <select className="form-select bg-black text-white custom-select border-secondary">
      <option value="1">{option}</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  );
};
