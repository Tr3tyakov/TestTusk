import React from 'react';
import Typography from '../../Elements/Typography/Typography';
import Box from '../../Elements/Box/Box';
import { useAppSelector } from '../../Hooks/useTypeSelector';
import { RowData, typeNavigationTitle } from '../../Interfaces/ITable';
import './table.scss';
import TableRow from './TableAdditional/TableRow';

const tableHeaders = [
  'Уровень',
  'Наименование работ',
  'Ед. изм.',
  'Количество',
  'Цена за ед.',
  'Стоимость',
];

interface ITable {
  activeTitle: typeNavigationTitle;
}

const Table: React.FC<ITable> = ({ activeTitle }) => {
  const store = useAppSelector((table) => table);
  return (
    <Box display="flex" align="center" justify="center">
      <table className="table" width="98%" cellSpacing={0}>
        <thead>
          <tr>
            {tableHeaders.map((element, index) => (
              <td key={index} className="table__title">
                <Box>
                  <Typography component="p" color="grey" fontSize="14px" fontWeight={400}>
                    {element}
                  </Typography>
                </Box>
              </td>
            ))}
          </tr>
        </thead>
        <tbody className="table__body">
          {store[activeTitle].map((element: RowData) => (
            <TableRow key={element.id} row={element} />
          ))}
        </tbody>
      </table>
    </Box>
  );
};

export default Table;
