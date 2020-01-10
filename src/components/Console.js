import React , { useState, useEffect, useRef } from "react";
import './Console.css';
import content from '../assets/content.json';
import OldCommands from "./OldCommands";
import SL from "./SL";

export default function Console(){

    const [input, setInput] = useState("");
    const [history, setHistory] = useState("");
    const [commands, setCommands] = useState([]);
    const [stateSL, setStateSL] = useState(0);

    const refStateSL = useRef(stateSL);

    useEffect(() => {
        refStateSL.current = stateSL;
    }, [stateSL]);

    function permissionCheck(command) {
        const notPermittedCommands = ["sudo", "rm", "cd", "mkdir", "cp"];
        return (notPermittedCommands.find(element => element === command));//true or falseを返す
    }

    function keyPress(e) {
        let judgeCommand = false;
        
        if(e.key === "ArrowUp" || e.key === "ArrowDown"){
        if(history.length>2){
            setInput(history.slice(2));
        }
        }else if(e.key === "Enter"){
            for(let i=0;i<content.length;i++){
                let commandsWithArgs = input.split([" "]);
                if(commandsWithArgs[0]===""){
                    judgeCommand = true;
                    break;
                }else if(permissionCheck(commandsWithArgs[0])){
                    judgeCommand = true;
                    setHistory("$ " + input);
                    setCommands(["that operation is not permitted.", "type <help> to see command list."]);
                    break;
                }else if(commandsWithArgs.length > 2 && (commandsWithArgs[0] === content[i].command)){
                    judgeCommand = true;
                    setHistory("$ " + input);
                    setCommands(["invalid number of arguments."]);
                    break;
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
                        case "sl":
                            const doSL = setInterval(() => { 
                                setStateSL(refStateSL.current+1);
                                if(refStateSL.current>120){
                                clearInterval(doSL);
                                setStateSL(0);
                                }
                            }, 20);
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
                            setCommands(["invalid argument."]);
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

    
    function consoleClicked() {
        document.getElementById("inputCommand").focus();
    }

    return(
        <div className='cmd-background'>
            <div className="cmd-console" onClick={() => consoleClicked()}>
                <div className="cmd-header">
                    <div className="cmd-circle1" onClick={() => window.alert("消さないで...(T T)")}></div>
                    <div className="cmd-circle2"></div>
                    <div className="cmd-circle3"></div>
                    <div className="cmd-title">
                    yagijin -- portfolio
                    </div>
                </div>
                <div className="cmd-welcome">Welcome to Yagijin's Portfolio!! Type "<span className="cmd-help">help</span>" to show commands.</div>
                <OldCommands commands={commands} history={history}/>
                <SL do={stateSL}/>
                <div className="cmd-commandline">
                    <div className="cmd-rootpath">
                    $
                    </div>
                    <input type="text" id="inputCommand" value={input} autoFocus onChange={(e) => setInput(e.target.value)} className="cmd-command" onKeyDown={(e) => keyPress(e)} >
                    </input>
                </div>
            </div>
        </div>
    );
}