//import React from 'react'
import Footer from '../footer/Footer'
import { ReactNode } from 'react';
//import Navbar from '../navbar/Navbar'
interface LayoutProps {
  children: ReactNode;
}
function Layout({ children }: LayoutProps) {
  return (
    <div>
      <div className="content">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout