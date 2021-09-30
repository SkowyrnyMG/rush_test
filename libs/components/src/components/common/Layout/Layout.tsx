import React, { FC } from 'react';
import 'styles/index.css';

export const Layout: FC = ({ children }) => (
  <>
    <main>{children}</main>
  </>
);
