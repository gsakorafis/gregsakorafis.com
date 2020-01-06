import React from 'react';
import Analytics from 'react-router-ga';


class PageAnalytics extends React.Component { 
  render() {
    return (
      <Analytics id="G-2RZ2M5RYRM">
        {this.props.children}
      </Analytics>
    );
  }
}

export default PageAnalytics;
