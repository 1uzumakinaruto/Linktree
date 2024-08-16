import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: ReactNode; // Define the type for children
}

function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const isAboutMe = location.pathname === '/about-me';

  return (
    <div>
      {!isAboutMe && <Header />}
      <main>{children}</main>
      {!isAboutMe && <Footer />}
    </div>
  );
}

export default Layout;
