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

    function consoleClicked() {
        document.getElementById("inputCommand").focus();
    }

    function levenshteinDistance(str1, str2) { 
    
        const d = []; 
        for(let i=0;i<=str1.length;i++){ 
            d[i] = []; 
            d[i][0] = i; 
        } 
        for(let i=0;i<=str2.length;i++){ 
            d[0][i] = i; 
        } 
    
        let cost = 0; 
        for(let i=1;i<=str1.length;i++){ 
            for(let j=1;j<=str2.length;j++){ 
                cost = (str1[i - 1] === str2[j - 1] ? 0 : 1); 
                d[i][j] = Math.min( d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost ); 
            }
        }
        //console.log(d[str1.length][str2.length] / Math.max(str1.length,str2.length));
        return d[str1.length][str2.length] / Math.max(str1.length,str2.length);
    }

    function keyPress(e) {
        let judgeCommand = false;
        let commandsWithArgs = input.split([" "]);

        if(e.key === "ArrowUp" || e.key === "ArrowDown"){
            if(history.length>2){
                setInput(history.slice(2));
            }
        }else if(e.key === "Tab"){
            //タブのデフォルトの挙動（フォーカスの移動）を止める
            e.preventDefault();

            if(commandsWithArgs[0]!==""){
                //tabが押されたらコマンドをサジェストする
                for(let i=0;i<content.length;i++){
                    if(content[i].command.indexOf(input)===0){
                        setInput(content[i].command);
                        break;
                    }
                }
            }
        }else if(e.key === "Enter"){
            for(let i=0;i<content.length;i++){
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
                /*
                コマンドとの編集距離を求めて，類似度の高いコマンドをサジェストする機能
                */
                let min = levenshteinDistance(commandsWithArgs[0],content[0].command);
                let min_index = 0;
                for(let i=1;i<content.length;i++){
                    let distance = levenshteinDistance(commandsWithArgs[0],content[i].command);
                    if(min>distance){
                        min_index = i;
                        min = distance;
                    }
                }
                if(min<0.7){
                    setHistory("$ " + input);
                    setCommands(["you'd like to use <"+content[min_index].command+"> ?"]);
                }else{
                    setHistory("$ " + input);
                    setCommands(["command not found."]);
                }
            }
            setInput("");
        };
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
                    <input type="text" id="inputCommand" value={input} autoComplete="off" autoFocus onChange={(e) => setInput(e.target.value)} className="cmd-command" onKeyDown={(e) => keyPress(e)} >
                    </input>
                </div>
            </div>
        </div>
    );
}