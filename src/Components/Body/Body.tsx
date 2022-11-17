import React from 'react';
import Box from '../Elements/Box/Box';
import Typography from '../Elements/Typography/Typography';
import { typeNavigationTitle } from '../Interfaces/ITable';

import { theme } from '../Theme/Theme';
import Table from './Table/Table';

interface IBody {
  activeTitle: typeNavigationTitle;
}

const Body: React.FC<IBody> = ({ activeTitle }) => {
  return (
    <Box display="flex" height="100%" flexDirection="column" sx={{ flex: 1 }}>
      <Box
        borderBottom={`1px solid ${theme.palette.secondary}`}
        height="44px"
        width="100%"
        display="flex">
        <Box
          borderRight={`1px solid ${theme.palette.secondary}`}
          display="flex"
          p="5px 15px"
          align="center">
          <Typography component="p" color="white" fontSize="18px">
            {activeTitle}
          </Typography>
        </Box>
      </Box>
      <Table activeTitle={activeTitle} />
    </Box>
  );
};

export default Body;
