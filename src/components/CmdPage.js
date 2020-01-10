import React, { useEffect } from "react";
import './CmdPage.css';
import SNSIcons from './SNSIcons';
import Console from './Console';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

export default function CmdPage() {

  useEffect(() => {
    document.getElementById("bodyMain").style.backgroundColor = "#b1cca9";
    return function cleanup() {
    document.getElementById("bodyMain").style.backgroundColor = "transparent";
    };
  }, []);

  function toPortfolio() {
    window.open("https://portfolio.yagijin.com/#/profile");
  }

  return (
    <div className="background">
      <div className="portfolio-box">
        <button className="portfolio-button" onClick={() => toPortfolio()}><FontAwesomeIcon size="lg" icon={faAngleDoubleRight}/> 通常のポートフォリオは<br/>こちらから</button>
      </div>
      <Console/>
      <SNSIcons/>
    </div>
  );
}