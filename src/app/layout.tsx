import "./globals.css";
import React, { ReactNode } from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
        </head>
        <body>
          <Header/>
          {children}
          <Footer/>
        </body>
      </html>
    </>
  );
};

export default Layout;
