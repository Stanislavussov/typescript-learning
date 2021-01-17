import React from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: React.ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = ({name, setNameCallback, addUser, error, totalUsers}) => {

    const styles = {
        inputClass: error ? s.error : "",
        generalStyle: s.generalStyle,
        buttonStyle: s.buttonStyle,
        container: s.container
    }


    return (
        <div className={`${styles.container}`}>
            <div>
                <input value={name} onChange={setNameCallback}
                       className={`${styles.inputClass} ${styles.generalStyle}`}/>
                <button className={styles.buttonStyle} onClick={addUser}>add</button>
                <span>{totalUsers}</span>
            </div>
            <div>
                {error}
            </div>
        </div>
    );
}

export default Greeting;
