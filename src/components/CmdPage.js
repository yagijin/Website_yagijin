import React, { useEffect } from "react";
import './CmdPage.css';
import SNSIcons from './SNSIcons';
import Console from './Console';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

export default function CmdPage() {

  useEffect(() => {
    document.getElementById("bodyMain").style.backgroundColor = "#b1cca9";
    return function cleanup() {
      document.getElementById("bodyMain").style.backgroundColor = "transparent";
    };
  }, []);

  return (
    <div className="background">
      <div className="parenttodivide">
      <div className="portfolio-box">
        <Link to="/profile">
          <button className="portfolio-button"><FontAwesomeIcon size="lg" icon={faAngleDoubleRight}/> 通常のポートフォリオは<br/>こちらから</button>
        </Link>
      </div>
      <Console/>
      </div>
      <SNSIcons/>
    </div>
  );
}