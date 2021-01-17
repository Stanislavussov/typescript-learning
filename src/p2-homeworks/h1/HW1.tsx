import React from "react";
import AlternativeMessage from "./AlternativeMessage";
import Message from "./Message";

export type MessageDataType = typeof messageData;
const messageData = {
    avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
    name: "Some Name",
    message: "some text",
    time: "22:00",
};

export type AlternativeMessageType = typeof alternativeMessage;
const alternativeMessage = {
    name: 'Stanislav',
    country: 'Czechia',
    age: 29
}

const HW1 = () => {

    return (
        <div>
            <hr/>
            homeworks 1

            should work (должно работать)

            <Message
               {...messageData}
            />

            <hr/>
            для личного творчества, могу проверить
            <AlternativeMessage {...alternativeMessage}>Чилдрен</AlternativeMessage>
            <hr/>
        </div>
    );
}

export default HW1;
