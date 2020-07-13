import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {

  return (
    <div className="container">
      <Header/>
      <div className="main">
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default Layout;