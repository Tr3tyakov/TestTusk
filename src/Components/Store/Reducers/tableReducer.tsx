import { createSlice } from '@reduxjs/toolkit';
import { ISaveRowAction, IEditRowAction, IDeleteRowAction } from '../../Interfaces/ITable';
import { deleteRow, editRow, saveRow } from './functions';
import { initialState } from './state';

export const tableReducer = createSlice({
  name: 'Table',
  initialState,
  reducers: {
    changeTableTitle: (state, action) => {
      state.activeTitle = action.payload;
    },

    saveTableRow: (state, action: ISaveRowAction) => {
      const storage = state[state.activeTitle];
      const newRow = action.payload;

      saveRow(newRow, storage);
    },

    editTableRow: (state, action: IEditRowAction) => {
      const row = action.payload;
      const storage = state[state.activeTitle];

      if (row.type === 'level') {
        editRow(row, storage);
        return;
      }
      const { unitPrice, quantity } = row;
      const rowWithPrice = { ...row, price: unitPrice * quantity };

      editRow(rowWithPrice, storage);
    },

    deleteTableRow: (state, action: IDeleteRowAction) => {
      const ID = action.payload;
      const storage = state[state.activeTitle];
      deleteRow(ID, storage);
    },
  },
});

export const { saveTableRow, deleteTableRow, editTableRow, changeTableTitle } =
  tableReducer.actions;

export default tableReducer.reducer;
