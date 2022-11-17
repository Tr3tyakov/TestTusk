import React from 'react';
import Box from '../Box/Box';

interface IImageBox {
  children: React.ReactNode;
  width: string;
  height: string;
}

export const ImageBox: React.FC<IImageBox> = ({ children, width, height }) => {
  return (
    <Box width={width} height={height} overflow="hidden">
      {children}
    </Box>
  );
};

export default ImageBox;
