import React from "react";
import MainHeader from './MainHeader.js';
import MainFooter from './MainFooter.js';

import '../App.scss';

function NotFound() {
    return (
        <>
          <MainHeader/>
          <div className="all-main">
            <div className="notfound-main">
              <h1>Page Not Found</h1>
              <h2>You can use the tab at the upper left to go to any page you want.</h2>
            </div>
          </div>
          <MainFooter/>
        </>
    );
}

export default NotFound;