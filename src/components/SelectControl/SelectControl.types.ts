import { ChangeEvent } from 'react';

export type SelectControlProps = {
  options: { title: string; value: string | number }[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  value: string | number;
};
