import React from 'react';
import Box from '../../../../Elements/Box/Box';
import blue from '../../../../../images/blue.svg';
import green from '../../../../../images/green.svg';
import file from '../../../../../images/file.svg';
import trash from '../../../../../images/trash.svg';
import clsx from 'clsx';
import { useAppDispatch } from '../../../../Hooks/useTypeSelector';
import { deleteTableRow, saveTableRow } from '../../../../Store/Reducers/tableReducer';
import './folder.scss';

interface IFolders {
  parentID: number;
  isEditing: boolean;
  type: 'level' | 'row';
  parentRow: number | null;
  color: 'blue' | 'green' | null;
}

const Folders: React.FC<IFolders> = ({ isEditing, parentID, type, parentRow, color }) => {
  const dispatch = useAppDispatch();

  function createNewRow(type: 'level' | 'row', ID: number | null) {
    if (!isEditing) {
      dispatch(
        saveTableRow({
          title: '', // Наименование работ
          unit: '', // Ед. изм.
          quantity: 0, // Количество
          unitPrice: 0, // Цена за ед.
          price: 0, // Стоимость
          parent: ID, // id уровня, в котором находится (либо null для первого уровня)
          type: type,
        }),
      );
    }
  }

  function deleteRow(ID: number | null) {
    dispatch(deleteTableRow(ID));
  }

  return (
    <Box className="folder">
      <Box
        className={clsx({
          background__folder: true,
          'background__folder--line': parentRow !== null,
        })}
        display="flex"
        gap="6px"
        align="center"
        justify="flex-start"
        p="6px"
        m={color === 'blue' ? '0 0 0 26px' : color === 'green' ? '0 0 0 52px' : ''}>
        {type === 'level' && parentRow === null ? (
          <>
            <img
              onClick={() => createNewRow('level', null)}
              className="folder"
              src={blue}
              alt="Папка первого уровня"
            />
            <img
              onClick={() => createNewRow('level', parentID)}
              className="folder--deactive"
              src={green}
              alt="Папка второго уровня"
            />
            <img
              onClick={() => createNewRow('row', parentID)}
              className="folder--deactive"
              src={file}
              alt="файл"
            />
            <img
              onClick={() => deleteRow(parentID)}
              className="folder--deactive"
              src={trash}
              alt="trash"
            />
          </>
        ) : type === 'level' && parentRow !== null ? (
          <>
            <img
              onClick={() => createNewRow('level', parentRow)}
              className="folder"
              src={green}
              alt="Папка второго уровня"
            />
            <img
              onClick={() => createNewRow('row', parentID)}
              className="folder--deactive"
              src={file}
              alt="файл"
            />
            <img
              onClick={() => deleteRow(parentID)}
              className="folder--deactive"
              src={trash}
              alt="trash"
            />
          </>
        ) : (
          <>
            <img className="folder" src={file} alt="файл" />
            <img
              className="folder--deactive"
              src={trash}
              alt="trash"
              onClick={() => deleteRow(parentID)}
            />
          </>
        )}
      </Box>
    </Box>
  );
};

export default Folders;
