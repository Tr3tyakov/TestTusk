import React from 'react';
import Box from '../../../Elements/Box/Box';
import Input from '../../../Elements/Input/Input';
import { RowData } from '../../../Interfaces/ITable';

type typeTitle = 'title' | 'unit' | 'quantity' | 'unitPrice' | 'price';

interface ITableInput {
  type: string;
  saveChangesRow: () => void;
  setData: (arg: any) => void;
  data: RowData;
  title: typeTitle;
}

const TableInput: React.FC<ITableInput> = ({ type, saveChangesRow, data, setData, title }) => {
  function changeInput(e: React.FormEvent<HTMLInputElement>) {
    setData({ ...data, [title]: e.currentTarget.value });
  }

  function saveData(e: React.SyntheticEvent) {
    e.preventDefault();
    saveChangesRow();
  }

  return (
    <form onSubmit={saveData}>
      <Box display="flex" width="100%">
        <Input
          className="table__input"
          type={type}
          height="14px"
          p="10px"
          fullWidth
          variant="secondary"
          color="secondary"
          onChange={(e) => changeInput(e)}
          value={data[title]}
        />
      </Box>
    </form>
  );
};

export default TableInput;
