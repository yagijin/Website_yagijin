import React , { useState } from "react";
import './Cmd.css';
import content from '../assets/content.json';

import OldCommands from "./OldCommands";

export default function Cmd() {

  const [command, setCommand] = useState("");
  const [history, setHistory] = useState("");
  const [commands, setCommands] = useState([]);

  function keyPress(e) {
    let judge = false;
    if(e.which === 13){
      for(let i=0;i<content.length;i++){
        if(command === content[i].command){
          setCommands(content[i].text);
          setHistory("$ " + content[i].command);
          judge = true;
          switch(content[i].command){
            case "github":
            case "github.app":
              window.open('https://github.com/yagijin');
              break;
            case "portfolio":
            case "portfolio.app":
              window.open('https://portfolio.yagijin.com/');
              break;
            case "products":
            case "products.app":
              window.open('https://portfolio.yagijin.com/#/products');
              break;
            default:
          }
          break;
        }
      }
      if(!judge){
        setCommands(["command not found."]);
        setHistory("$ " + command);
      }
      setCommand("");
    };
  }

  function toPortfolio() {
    window.open("https://portfolio.yagijin.com/#/profile");
    console.log("clicked")
  }

  return (
    <div>
      <div className="portfolio-box">
        <button className="portfolio-button" onClick={() => toPortfolio()}>普通のポートフォリオはこちらから</button>
      </div>
      <div className='cmd-background'>
          <div className="cmd-console">
            <div className="cmd-header">
              <div className="cmd-circle1"></div>
              <div className="cmd-circle2"></div>
              <div className="cmd-circle3"></div>
              <div className="cmd-title">
                yagijin -- portfolio
              </div>
            </div>
            <div className="cmd-welcome">Welcome to Yagijin's Portfolio!! Type "<span className="cmd-help">help</span>" to show commands.</div>
            <OldCommands commands={commands} history={history}/>
            <div className="cmd-commandline">
              <div className="cmd-rootpath">
                $
              </div>
              <input type="text" value={command} onChange={(e) => setCommand(e.target.value)} className="cmd-command" onKeyPress={(e) => keyPress(e)} >
              </input>
            </div>
          </div>
      </div>
    </div>
  );
}