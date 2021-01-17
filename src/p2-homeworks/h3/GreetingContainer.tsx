import React, {ChangeEvent, useState} from "react";
import Greeting from "./Greeting";
import {UsersType} from "./HW3";

type GreetingContainerPropsType = {
    users: UsersType // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>(""); // need to fix any
    const [error, setError] = useState<string>(""); // need to fix any

    const setNameCallback = (e: React.ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.target.value)
    };

    const addUser = () => {
        if (name === ""){
            setError('Enter your name!')
        } else {
            addUserCallback(name)
            setName("")
            alert(`Hello ${name}`)
            setError('')
        }
    }
    ;

    const totalUsers = users.length; // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    );
}

export default GreetingContainer;
