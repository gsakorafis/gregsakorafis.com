import React from 'react';
import HeaderNav from './HeaderNav';
import './MainLayout.css';

function MainLayout({pageContent}) {
  return (
    <div className="MainLayout">
      <HeaderNav />
      <div className="MainContent">{pageContent}</div>
    </div>
  ); 
}

export default MainLayout;
