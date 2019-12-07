import React from 'react';
import './HeaderNav.css';

function HeaderNav() {
  return (
    <div className="HeaderNav">
      <div className="HeaderNavContents">
        <div className="HeaderTitle">
          <div className="HeaderTitleText">
            <a href="/">Greg Sakorafis</a>
          </div>
        </div>
        <div className="HeaderActions">
          <a className="GitHubAction" href="https://github.com/gsakorafis"></a>
          <a className="EmailAction" href="mailto:greg@gregsakorafis.com"></a>
          <a className="LinkedInAction" href="https://www.linkedin.com/gregsakorafis"></a>
          <a className="PinterestAction" href="https://pinterest.com/gregsakorafis"></a>
        </div>
      </div>
    </div>
  ); 
}

export default HeaderNav;
