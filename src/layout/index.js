import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Side from './Side';

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Header/>
      <div className="main">
        {children}
      </div>
      <Side/>
      <Footer/>
    </div>
  )
}

export default Layout;