import React from 'react';
import type { PropsWithChildren } from 'react';

import './Table.css';

type TableProps = PropsWithChildren<{
  title: string
}>;

const Table = ({ title, children }: TableProps) => (
  <div className='table card'>
    <div className='table__title callout-bold'>{title}</div>
    <div className='table__row-container'>
      {children}
    </div>
  </div>
);

export default Table;