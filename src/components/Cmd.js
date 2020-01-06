import React , { useState } from "react";
import './Cmd.css';
import content from '../assets/content.json';
import OldCommands from "./OldCommands";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

export default function Cmd() {

  const [input, setInput] = useState("");
  const [history, setHistory] = useState("");
  const [commands, setCommands] = useState([]);

  function keyPress(e) {
    let judgeCommand = false;
    if(e.which === 13){
      for(let i=0;i<content.length;i++){
        let commandsWithArgs = input.split([" "]);
        if(commandsWithArgs[0]===""){
          judgeCommand = true;
          break;
        }else if(commandsWithArgs.length > 2 && (commandsWithArgs[0] === content[i].command)){
          judgeCommand = true;
          setHistory("$ " + input);
          setCommands(["too many arguments."]);

        }else if(commandsWithArgs.length < 2 && (commandsWithArgs[0] === content[i].command)){
          judgeCommand = true;
          setHistory("$ " + input);
          setCommands(content[i].body[0].text);

          switch(content[i].command){
            case "github":
            case "github.app":
              window.open('https://github.com/yagijin');
              break;
            case "portfolio":
            case "portfolio.app":
              window.open('https://portfolio.yagijin.com/#/profile');
              break;
            case "products":
            case "products.app":
              window.open('https://portfolio.yagijin.com/#/products');
              break;
            default:
          }
          break;
        }else if(commandsWithArgs[0] === content[i].command){
          judgeCommand = true;
          for(let j=0;j<content[i].body.length;j++){
            if(commandsWithArgs[1]===content[i].body[j].argument){
              setHistory("$ " + input);
              setCommands(content[i].body[j].text);
              break;
            }else{
              setHistory("$ " + input);
              setCommands(["incorrect argument."]);
            }
          }
          break;
        }
      }
      if(!judgeCommand){
        setHistory("$ " + input);
        setCommands(["command not found."]);
      }
      setInput("");
    };
  }

  function toPortfolio() {
    window.open("https://portfolio.yagijin.com/#/profile");
  }

  return (
    <div className="background">
      <div className="portfolio-box">
        <button className="portfolio-button" onClick={() => toPortfolio()}><FontAwesomeIcon size="lg" icon={faAngleDoubleRight}/> 通常のポートフォリオは<br/>こちらから</button>
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
              <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="cmd-command" onKeyPress={(e) => keyPress(e)} >
              </input>
            </div>
          </div>
      </div>
    </div>
  );
}