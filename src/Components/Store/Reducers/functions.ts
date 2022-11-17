import { current } from '@reduxjs/toolkit';
import { NewRowData, RowData } from '../../Interfaces/ITable';

export function saveRow(rowData: NewRowData, storage: RowData[]) {
  const color = createColor(rowData, storage);
  const index = Math.max(...storage.map((v) => v.id), 0) + 1;
  const row: RowData = { id: index, color: color, ...rowData };

  //ecли папка 1 уровня - добавляем в конец массива
  if (rowData.parent === null) {
    storage.push(row);
    recalculation(row.parent, storage);
    return;
  }

  //если тип row, добавляем в начало родителя
  if (row.type === 'row') {
    const index = storage.findIndex((e) => e.id === row.parent);
    storage.splice(index + 1, 0, row);
    recalculation(row.parent, storage);

    return;
  }

  //ищем последний элемент родителя
  const lastIndex = findLastIndex(storage, (e) => e.parent === row.parent);
  console.log(lastIndex, 'последний элемент родителя');
  //если нет элементов,то добавляем в родителя
  if (lastIndex === -1) {
    const index = storage.findIndex((e) => e.id === row.parent);
    storage.splice(index + 1, 0, row);
    recalculation(row.parent, storage);

    return;
  }

  // если в родителе есть элементы
  const element = storage[lastIndex];

  //находим последний элемент родителя
  const check = findLastIndex(storage, (e) => e.parent === element.id);
  if (check !== -1) {
    storage.splice(check + 1, 0, row);
    recalculation(row.parent, storage);
    return;
  }
  storage.splice(lastIndex + 1, 0, row);
  recalculation(row.parent, storage);
}

export function deleteRow(ID: number | null, storage: RowData[]) {
  const currentElement = storage.find((e) => e.id === ID);

  const isBlueFolder = currentElement?.parent === null;
  if (isBlueFolder) return;

  let currentIndex = storage.findIndex((e) => e.id === ID);

  do {
    storage.splice(currentIndex, 1);
    currentIndex = storage.findIndex((e) => e.parent === ID);
  } while (currentIndex !== -1);

  recalculation(currentElement!.parent, storage);
}

// функция для изменения строки
export function editRow(row: RowData, storage: RowData[]) {
  const index = storage.findIndex((v) => v.id === row.id);
  storage.splice(index, 1, row);

  recalculation(row.parent, storage);
}

export function recalculation(parentID: number | null, storage: RowData[]) {
  const rows = [...storage];
  const changedRows: RowData[] = [];

  if (parentID == null) return changedRows;

  let currentParentIndex = rows.findIndex((v) => v.id === parentID);
  if (currentParentIndex === -1) return changedRows;

  do {
    const currentParent = rows[currentParentIndex];
    const children = rows.filter((v) => v.parent === currentParent.id);
    const newPrice = children.reduce((acc, v) => acc + v.price, 0);
    if (currentParent.price !== newPrice) {
      rows[currentParentIndex].price = newPrice;
      changedRows.push(rows[currentParentIndex]);

      currentParentIndex = rows.findIndex((v) => v.id === currentParent.parent);
      continue;
    }

    break;
  } while (currentParentIndex !== -1);

  return changedRows;
}

function createColor(row: NewRowData, storage: RowData[]) {
  const parentElement = storage.find((e: RowData) => e.id === row.parent);
  if (parentElement?.parent === null) return 'blue';
  if (parentElement?.type === 'level' && parentElement.parent !== null) return 'green';
  return null;
}

export function findLastIndex<T>(
  array: Array<T>,
  callback: (value: T, index: number, obj: T[]) => boolean,
): number {
  let length = array.length;
  while (length--) {
    if (callback(array[length], length, array)) return length;
  }
  return -1;
}
