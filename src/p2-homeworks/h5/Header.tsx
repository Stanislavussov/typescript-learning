import React, {useState} from "react";
import s from './Header.module.css'
import Menu from "./pages/Menu";

function Header() {

    const [menuStatus, setMenuStatus] = useState(false)

    const menuStatusHandler = (menuStatus: boolean) => {
        setMenuStatus(menuStatus)
    }

    return (
        <div>
            <nav>
                <Menu menuStatus={menuStatus} menuStatusHandler={menuStatusHandler} />
            </nav>
        </div>
    );
}

export default Header;
