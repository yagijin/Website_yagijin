import React from 'react';
import { Link } from 'react-router-dom';
import '../App.scss';

function Copyright() {
    return (
      <p style={{margin: "2px 0 10px 0"}}>
        {'Copyright © Jin Yagi '}
        {new Date().getFullYear()}
        {' - All Rights Reserved. '}
      </p>
    );
}

export default function MainFooter() {
  
    return (
        <footer className="footer-main">
            <Link to="/privacypolicy" style={{ textDecoration: 'none',color: "#ffffff" }}>
              <font style={{fontSize:"12px"}}>Privacy Policy</font>
            </Link>
            <Copyright />
        </footer>
    );
  }
