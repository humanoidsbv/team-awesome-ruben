/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import styles from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

const Layout = ({ children }: LayoutProps): React.ReactElement => (
  <main className={styles.layout}>{children}</main>
);

export default Layout;
