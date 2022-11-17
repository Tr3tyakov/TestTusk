import React from 'react';
import { theme } from '../../Theme/Theme';
import { typeCursor } from '../Box/Box';

type typeTypography = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type typeGutterButtom = '2px' | '4px' | '8px';
type typePaletteTheme = 'main' | 'secondary' | 'primary' | 'grey' | 'white';
type fontFamily = 'Calibri' | 'Helvetica' | 'Circe Rounded Alt ';
type fontStyle = 'normal';
interface ITypography {
  component?: typeTypography;
  children?: React.ReactNode;
  className?: string;
  gutterButtom?: typeGutterButtom;
  sx?: CSSStyleSheet;
  fontSize?: string;
  color?: typePaletteTheme;
  fontWeight?: number;
  cursor?: typeCursor;
}

const Typography: React.FC<ITypography> = ({
  component = 'p',
  children,
  sx,
  className,
  gutterButtom,
  fontSize = '16px',
  color = 'main',
  fontWeight,
  cursor,
}) => {
  const style = {
    ...{
      color: theme.typography[color],
      fontSize,
      margin: gutterButtom ? '8px' : '0px',
      fontWeight,
      cursor,
    },
    ...sx,
  };
  return React.createElement(component, { style, className }, children);
};

export default Typography;
