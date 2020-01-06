import React from 'react';
import HeaderNav from './HeaderNav';
import './MainLayout.css';

class MainLayout extends React.Component {
  render() {
    return (
      <div className="MainLayout">
        <HeaderNav />
        <div className="MainContent">{this.props.children}</div>
      </div>
    );
  }
}

export default MainLayout;
