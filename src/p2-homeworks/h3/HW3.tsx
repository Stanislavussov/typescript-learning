import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";
import { v4 as uuidv4 } from 'uuid';


// types
export type UserType = {
    _id: number | string
    name: string
}

export type UsersType = Array<UserType>

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<UsersType>([]); // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        setUsers([...users, {_id: uuidv4(), name: name}]); // need to fix
    }

    return (
        <div>
            <hr/>
            homeworks 3
            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    );
}

export default HW3;
