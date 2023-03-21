import React, { ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
