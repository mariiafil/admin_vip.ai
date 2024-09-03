import { FC } from 'react';
import './selectControl.css';

export const SelectControl: FC<{ option: string }> = ({ option }) => {
  return (
    <select className="form-select bg-black text-white custom-select border-secondary">
      <option value="1">{option}</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  );
};
