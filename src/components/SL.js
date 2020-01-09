import React from "react";
import SLPic from "../assets/SL.png";

export default function SL(props) {
    const position = props.do - 40;
    return (
        props.do?<img src={SLPic} alt="sl-pic" style={{position: "absolute",right: position+"%",height: "50%",zIndex: 2}}></img>:<></>
    );
}