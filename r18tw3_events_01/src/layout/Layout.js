import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Preview from './Preview';



function Layout({children}) {
  return (
    <div className="w-full px-3">
      <div>
        <Header />
      </div>
      <div>
        {children}
      </div>
      <div>
        <Footer />
      </div>      
      <Preview />
    </div>
  )
}

export default Layout
