import React from "react";
import './OldCommands.css';

export default function OldCommands(props) {

    const text = props.commands.map(((command,index) =>
        <div key={index} className="command">{command}</div>
    ));

    return (
      <div className='commands'>
          {props.history}
          {text}
      </div>
    );
  }