import React from 'react';
import Box from '../../Elements/Box/Box';
import structure from '../../../images/structure.svg';
import arrowBack from '../../../images/back.svg';
import Typography from '../../Elements/Typography/Typography';
import arrow from '../../../images/arrow.svg';
import avatar from '../../../images/avatar.svg';
import './header.scss';
type typeHeaderTitle = 'Просмотр' | 'Управление';

const Header = () => {
  const [headerTitle, setHeaderTitle] = React.useState<typeHeaderTitle>('Просмотр');

  function changeHeaderTitle(title: typeHeaderTitle) {
    setHeaderTitle(title);
  }

  return (
    <Box
      p="0 24px"
      height="43px"
      display="flex"
      backgroundColor="main"
      justify="space-between"
      borderBottom="1px solid #414144">
      <Box display="flex" align="center">
        <Box display="flex" gap="27px">
          <Box width="16px" height="16px" display="flex" gap="27px" cursor="pointer">
            <img src={structure} alt="structure" />
          </Box>
          <Box width="16px" height="16px" m="0 34px 0 0" cursor="pointer">
            <img src={arrowBack} alt="back" />
          </Box>
        </Box>
        <Box display="flex" gap="27px">
          <Box onClick={() => changeHeaderTitle('Просмотр')} className="box__title">
            <Typography component="p" color="white" cursor="pointer">
              Просмотр
            </Typography>
            <Box className={headerTitle === 'Просмотр' ? 'title--active' : ''}></Box>
          </Box>
          <Box onClick={() => changeHeaderTitle('Управление')} className="box__title">
            <Typography component="p" color="white" cursor="pointer">
              Управление
            </Typography>
            <Box className={headerTitle === 'Управление' ? 'title--active' : ''}></Box>
          </Box>
        </Box>
      </Box>

      <Box display="flex" gap="7px" align="center" cursor="pointer">
        <Box
          width="28px"
          height="28px"
          boradius="50%"
          backgroundColor="white"
          overflow="hidden"
          cursor="pointer">
          <img src={avatar} alt="avatar" />
        </Box>
        <Typography component="p" gutterButtom="4px" color="white">
          Антон петров
        </Typography>
        <Box>
          <img src={arrow} alt="arrow" />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
