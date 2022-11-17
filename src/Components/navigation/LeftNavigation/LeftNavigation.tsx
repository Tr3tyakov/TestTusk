import React from 'react';
import Box from '../../Elements/Box/Box';
import navigation from '../../../images/navigation.svg';
import Typography from '../../Elements/Typography/Typography';
import { theme } from '../../Theme/Theme';
import arrow from '../../../images/arrow.svg';
import clsx from 'clsx';
import './leftNavigation.scss';
import { typeNavigationTitle } from '../../Interfaces/ITable';

const navigationTitles: typeNavigationTitle[] = [
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

interface ILeftNavigation {
  activeTitle: typeNavigationTitle;
  changeTitle: (title: typeNavigationTitle) => void;
}

const LeftNavigation: React.FC<ILeftNavigation> = ({ activeTitle, changeTitle }) => {
  const [activeNavigation, setActiveNavigation] = React.useState<boolean>(true);

  function changeActiveNavigation() {
    setActiveNavigation(!activeNavigation);
  }

  return (
    <Box className="navigation" width="240px" borderRight={`1px solid ${theme.palette.secondary}`}>
      <Box
        borderBottom={`1px solid ${theme.palette.secondary}`}
        height="28px"
        display="flex"
        align="flex-start"
        p="8px 13px 8px 20px"
        justify="space-between">
        <Box>
          <Typography component="p" color="white">
            Название проекта
          </Typography>
          <Typography component="p" color="white" fontSize="10px">
            Аббревиатура
          </Typography>
        </Box>
        <Box
          onClick={changeActiveNavigation}
          display="flex"
          align="center"
          height="100%"
          cursor="pointer">
          <img
            className={clsx({
              navigation__arrow: true,
              'navigation__arrow--active': !activeNavigation,
            })}
            src={arrow}
            alt="arrow"
          />
        </Box>
      </Box>
      {activeNavigation && (
        <Box>
          {navigationTitles.map((element, index) => (
            <Box
              key={index}
              display="flex"
              gap="17px"
              height="32px"
              align="center"
              cursor="pointer"
              p={'0 0 0 20px'}
              className={clsx({ navigation: true, 'navigation--active': element === activeTitle })}
              onClick={() => changeTitle(element)}>
              <Box>
                <img src={navigation} alt="structure" />
              </Box>
              <Typography component="p" color="white" fontSize="14px" fontWeight={400}>
                {element}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default LeftNavigation;
