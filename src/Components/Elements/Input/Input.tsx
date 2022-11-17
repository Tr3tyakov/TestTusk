import React from 'react';
import './input.scss';
import { theme } from '../../Theme/Theme';
type typeInputVariant = 'primary' | 'secondary' | 'main';

interface IInput {
  fullWidth?: boolean;
  type?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: any;
  value?: string | number;
  placeholder?: string;
  variant?: typeInputVariant;
  color?: typeInputVariant;
  height?: string;
  width?: string;
  p?: string;
}

const Input: React.FC<IInput> = ({
  variant,
  fullWidth,
  value,
  type,
  className,
  onChange,
  onSubmit,
  placeholder,
  color,
  height,
  width,
  p,
}) => {
  return (
    <input
      style={{
        width: fullWidth ? '100%' : width,
        height: height,
        color: color ? theme.palette[color] : '',
        padding: p,
      }}
      className={`${className} ${variant}`}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onSubmit={onSubmit}
    />
  );
};

export default Input;
