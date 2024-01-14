import React from 'react';

import './TableRow.css';

type TableRowProps = {
  fields: React.ReactNode,
  right?: React.ReactNode,
  header?: boolean
}

const TableRow = ({ fields, right, header }: TableRowProps) => (
  <div className={`table-row ${header ? 'table-row--header': ''}`}>
    <div className='table-row__fields-container'>
      {fields}
    </div>
    {right}
  </div>
);

export default TableRow;