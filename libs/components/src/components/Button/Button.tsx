import React, { FC } from 'react';
import { ButtonProps } from './models';

export const Button: FC<ButtonProps> = ({ children, variant }) => {
  const buttonClasses = `button ${variant && `button--${variant}`}`;
  return <button className={buttonClasses}>{children}</button>;
};
