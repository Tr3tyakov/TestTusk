import React from 'react';
import { theme, typeThemePalette } from '../../Theme/Theme';

type typeJustifyContent =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

type typeDisplay = 'flex' | 'block' | 'inline-block' | 'inline-flex';
type typeOverflow = 'auto' | 'hidden' | 'scroll';
type typeFlexDirection = 'column' | 'column-reverse' | 'row' | 'row-reverse';
type typeAlignItems = 'center' | 'end' | 'flex-start' | 'flex-end' | 'revert';
export type typeCursor = 'pointer' | 'none	' | 'progress' | 'wait' | 'move' | 'not-allowed';
type typeWrap = 'wrap' | 'wrap-reverse';

interface IBox {
  children?: React.ReactNode;
  sx?: object;
  component?: string;
  justify?: typeJustifyContent;
  display?: typeDisplay;
  gap?: string;
  width?: string;
  height?: string;
  overflow?: typeOverflow;
  p?: string;
  m?: string;
  align?: typeAlignItems;
  flexDirection?: typeFlexDirection;
  wrap?: typeWrap;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  onDoubleClick?: (e: React.MouseEvent<HTMLElement>) => void;
  className?: string;
  backgroundColor?: typeThemePalette;
  boradius?: string;
  border?: string;
  borderTop?: string;
  borderBottom?: string;
  borderRight?: string;
  borderLeft?: string;
  cursor?: typeCursor;
}

const Box: React.FC<IBox> = ({
  children,
  sx,
  component = 'div',
  justify,
  display,
  gap,
  p,
  m,
  wrap,
  width,
  height,
  align,
  overflow,
  flexDirection,
  onClick,
  className,
  backgroundColor,
  boradius,
  border,
  borderBottom,
  borderLeft,
  borderRight,
  borderTop,
  cursor,
  onDoubleClick,
}) => {
  const style = {
    ...{
      justifyContent: justify,
      display,
      gap,
      width,
      height,
      padding: p,
      margin: m,
      overflow,
      flexDirection,
      flexWrap: wrap,
      alignItems: align,
      backgroundColor: backgroundColor ? theme.palette[backgroundColor] : '',
      borderRadius: boradius,
      border,
      borderBottom,
      borderTop,
      borderLeft,
      borderRight,
      cursor,
    },
    ...sx,
  };
  return React.createElement(component, { style, className, onClick, onDoubleClick }, children);
};
export default Box;
