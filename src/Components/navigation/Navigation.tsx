import React from 'react';
import Body from '../Body/Body';
import Box from '../Elements/Box/Box';
import { useAppDispatch, useAppSelector } from '../Hooks/useTypeSelector';
import { typeNavigationTitle } from '../Interfaces/ITable';
import { changeTableTitle } from '../Store/Reducers/tableReducer';
import LeftNavigation from './LeftNavigation/LeftNavigation';
import './navigation.scss';
export const navigationTitles = [
  'По проекту',
  'Объекты',
  'РД',
  'МТО',
  'СМР',
  'График',
  'МиМ',
  'Рабочие',
  'Капвложения',
  'Бюджет',
  'Финансирование',
  'Панорамы',
  'Камеры',
  'Поручения',
  'Контрагенты',
];

interface INavigation {}

const Navigation: React.FC<INavigation> = () => {
  const activeTitle = useAppSelector((store) => store.activeTitle);
  const dispatch = useAppDispatch();

  function changeTitle(title: typeNavigationTitle) {
    dispatch(changeTableTitle(title));
  }

  return (
    <Box className="body">
      <LeftNavigation activeTitle={activeTitle} changeTitle={changeTitle}></LeftNavigation>
      <Body activeTitle={activeTitle}></Body>
    </Box>
  );
};

export default Navigation;
