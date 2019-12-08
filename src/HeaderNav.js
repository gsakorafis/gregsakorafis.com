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
          <a className="GitHubAction" href="https://github.com/gsakorafis" aria-label="github"></a>
          <a className="EmailAction" href="mailto:greg@gregsakorafis.com" aria-label="email"></a>
          <a className="LinkedInAction" href="https://www.linkedin.com/in/gregsakorafis/" aria-label="linkedin"></a>
          <a className="PinterestAction" href="https://pinterest.com/gregsakorafis" aria-label="pinterest"></a>
        </div>
      </div>
    </div>
  ); 
}

export default HeaderNav;
