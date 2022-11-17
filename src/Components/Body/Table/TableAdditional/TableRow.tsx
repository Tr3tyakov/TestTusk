import React from 'react';
import Box from '../../../Elements/Box/Box';
import Folders from './Folders/Folders';
import Typography from '../../../Elements/Typography/Typography';
import { useAppDispatch } from '../../../Hooks/useTypeSelector';
import TableInput from './TableInput';
import { RowData } from '../../../Interfaces/ITable';
import { editTableRow } from '../../../Store/Reducers/tableReducer';

interface ITableBody {
  row: RowData;
}

const TableRow: React.FC<ITableBody> = React.memo(({ row }) => {
  const dispatch = useAppDispatch();
  const [isEditing, setIsEditing] = React.useState<boolean>(true);
  const [rowData, setRowData] = React.useState<RowData>({
    id: row.id,
    title: row.title,
    unit: row.unit,
    quantity: row.quantity,
    unitPrice: row.unitPrice,
    price: row.price,

    parent: row.parent,
    type: row.type,
    color: row.color,
  });

  function setEditing() {
    setIsEditing(true);
  }

  function saveChangesRow() {
    setIsEditing(false);
    if (row.type === 'level') {
      dispatch(editTableRow({ ...row, title: rowData.title }));
      return;
    }
    dispatch(editTableRow(rowData));
  }

  return (
    <tr onDoubleClick={setEditing}>
      <td width={'4%'}>
        <Box display="flex" width="100px">
          <Folders
            isEditing={isEditing}
            parentID={row.id}
            parentRow={row.parent}
            type={row.type}
            color={row.color}></Folders>
        </Box>
      </td>

      <td width={'55%'}>
        {isEditing ? (
          <TableInput
            type="text"
            saveChangesRow={saveChangesRow}
            data={rowData}
            title="title"
            setData={setRowData}
          />
        ) : (
          <Typography component="p" color="white" fontSize="14" fontWeight={400}>
            {row.title}
          </Typography>
        )}
      </td>
      <td width={'15%'}>
        {isEditing && row.type === 'row' ? (
          <TableInput
            type="text"
            saveChangesRow={saveChangesRow}
            data={rowData}
            title="unit"
            setData={setRowData}
          />
        ) : (
          <Typography component="p" color="white" fontSize="14" fontWeight={400}>
            {row.type === 'row' && row.unit}
          </Typography>
        )}
      </td>
      <td width={'15%'}>
        {isEditing && row.type === 'row' ? (
          <TableInput
            type="number"
            saveChangesRow={saveChangesRow}
            data={rowData}
            title="quantity"
            setData={setRowData}
          />
        ) : (
          <Typography component="p" color="white" fontSize="14" fontWeight={400}>
            {row.type === 'row' && row.quantity}
          </Typography>
        )}
      </td>
      <td width={'15%'}>
        {isEditing && row.type === 'row' ? (
          <TableInput
            type="number"
            saveChangesRow={saveChangesRow}
            data={rowData}
            title="unitPrice"
            setData={setRowData}
          />
        ) : (
          <Typography component="p" color="white" fontSize="14" fontWeight={400}>
            {row.type === 'row' && row.unitPrice}
          </Typography>
        )}
      </td>
      <td width={'4%'}>
        <Typography component="p" color="white" fontSize="14" fontWeight={400}>
          {row.price}
        </Typography>
      </td>
    </tr>
  );
});

export default TableRow;
