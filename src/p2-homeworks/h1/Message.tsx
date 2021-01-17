import React from "react";
import {MessageDataType} from "./HW1";

const Message: React.FC<MessageDataType> = ({avatar, name, time, message}) => {
    return (
        <div>
            <img src={avatar} alt=""/>
            <h3>{name}</h3>
            <p>{message}</p>
            <p>{time}</p>


        </div>
    );
}

export default Message;
