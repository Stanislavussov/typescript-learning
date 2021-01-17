import React from "react";
import {AlternativeMessageType} from "./HW1";

const AlternativeMessage: React.FC<AlternativeMessageType> = (props) => {


    return (
        <div>
            <span>{props.name} </span>
            <span>{props.age} </span>
            <span>{props.country} </span>
            <span>{props.children} </span>
        </div>
    );
}

export default AlternativeMessage;
