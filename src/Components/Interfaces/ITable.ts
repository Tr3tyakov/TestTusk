export interface NewRowData {
  title: string; // Наименование работ
  unit: string; // Ед. изм.
  quantity: number; // Количество
  unitPrice: number; // Цена за ед.
  price: number; // Стоимость

  parent: number | null; // id уровня, в котором находится (либо null для первого уровня)
  type: 'level' | 'row';
}

export interface RowData extends NewRowData {
  id: number;
  color: 'blue' | 'green' | null;
}

export interface ISaveRowAction {
  payload: NewRowData;
}

export interface IEditRowAction {
  payload: RowData;
}

export interface IDeleteRowAction {
  payload: number | null;
}

export type $CHANGEME = any;

export type ICreateRow = (type: 'level' | 'row', parentID: number | null) => void;

export type typeNavigationTitle =
  | 'По проекту'
  | 'Объекты'
  | 'РД'
  | 'МТО'
  | 'СМР'
  | 'График'
  | 'МиМ'
  | 'Рабочие'
  | 'Капвложения'
  | 'Бюджет'
  | 'Финансирование'
  | 'Панорамы'
  | 'Камеры'
  | 'Поручения'
  | 'Контрагенты';
