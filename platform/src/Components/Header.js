import logo from '../Assets/SnowHouse.gif'
import headerStyles from './Header.module.css';
import React, { useState } from 'react';
import { Button } from '@material-ui/core';

function Header () {

    const[register, setRegister] = useState(false);

    return (
        <div>
            <div className={headerStyles.flexBox}>
                <div className={headerStyles.flexBox2}>
                    <img className={headerStyles.img} src={logo} alt=""/>
                    <div className={headerStyles.text}>בומבום פאו</div>
                </div>
                <button className={headerStyles.button} onClick={() => { setRegister(!register) }}>הוסף מקום אירוח</button>
            </div>
            {register && 
            <div className={headerStyles.popup}>
                <div className={headerStyles.item} style={{ top:'10%', fontWeight: 'bold' }}>הוספת דירה</div>
                <input tag="text" className={headerStyles.item} style={{ top:'30%', left:'35%' }}></input>
                <div className={headerStyles.item} style={{ top:'30%', left:'70%' }}>כתובת</div>
                <input tag="text" className={headerStyles.item} style={{ top:'30%', left:'35%' }}></input>
                <div className={headerStyles.item} style={{ top:'50%', left:'70%' }}>מספר מתארחים אפשרי</div>
                <input tag="text" className={headerStyles.item} style={{ top:'50%', left:'35%' }}></input>
                <div className={headerStyles.item} style={{ top:'70%', left:'70%' }}>שם איש הקשר</div>
                <input tag="text" className={headerStyles.item} style={{ top:'70%', left:'35%' }}></input>
                <div className={headerStyles.item} style={{ top:'90%', left:'70%' }}>מספר טלפון</div>
                <input tag="text" className={headerStyles.item} style={{ top:'90%', left:'35%' }}></input>
                <button className={headerStyles.item} style={{ top:'90%', left:'10%' }}>פרסם</button>
            </div>}

        </div>

    )
}

export default Header;