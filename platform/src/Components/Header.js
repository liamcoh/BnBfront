import logo from '../Assets/SnowHouse.gif'
import headerStyles from './Header.module.css';
import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import axios from "axios";

async function handleSubmit(address1,num1,name1,phone1){
//     {
//         "address": {
//             "id": 10710,
//             "country": "Qatar",
//             "city": "South Desireberg",
//             "street": "Franklyn Parkway",
//             "apt": 5320,
//             "lat": 30.4125135027,
//             "lng": 30.5450267316
//         },
//         "animals": true,
//         "description": "string",
//         "disabledAccess": true,
//         "id": 0,
//         "isActive": true,
//         "kosher": true,
//         "mamad": true,
//         "maxPeople": "danielrogel",
//         "owner": {
//           "contactPhone": "danielrogel",
//           "email": "steve.simonis@yahoo.com",
//           "name": "danielrogel"
//         },
//         "photo": "string"
// }
    var toSubmit = {    
        "address": {
            "country": "Qatar",
            "city": "South Desireberg",
            "street": "Franklyn Parkway",
            "apt": 5320,
            "lat": 30.412027,
            "lng": 30.5457316
        },
        "description": "string",
        "isActive": true,
        "maxPeople": 2,
        "owner": {
          "contactPhone": "333",
          "email": "steve.simonis55@yahoo.com",
          "name": "danielrogel"
        },
        "photo": "string"
}
    var response = await axios.post("http://hashlama005team8.azurewebsites.net/houses",toSubmit).
    then(()=>{console.log("good push")}).catch((err)=>{console.log("Somthiing went wrong")})
}


function Header () {

    const[register, setRegister] = useState(false);
    const[address, setAddress] = useState();
    const[num, setNum] = useState();
    const[name, setName] = useState();
    const[phone, setPhone] = useState();

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
                <form>
                <div className={headerStyles.item} style={{ top:'10%', fontWeight: 'bold' }}>הוספת דירה</div>
                <input tag="text" className={headerStyles.item} style={{ top:'30%', left:'35%' }}></input>
                <div className={headerStyles.item} style={{ top:'30%', left:'70%' }} onchange={(e) => { setAddress(e) }}>כתובת</div>
                <input tag="text" className={headerStyles.item} style={{ top:'30%', left:'35%' }}></input>
                <div className={headerStyles.item} style={{ top:'50%', left:'70%' }} onchange={(e) => { setNum(e) }}>מספר מתארחים אפשרי</div>
                <input tag="text" className={headerStyles.item} style={{ top:'50%', left:'35%' }}></input>
                <div className={headerStyles.item} style={{ top:'70%', left:'70%' }} onchange={(e) => { setName(e) }}>שם איש הקשר</div>
                <input tag="text" className={headerStyles.item} style={{ top:'70%', left:'35%' }}></input>
                <div className={headerStyles.item} style={{ top:'90%', left:'70%' }} onchange={(e) => { setPhone(e) }}>מספר טלפון</div>
                <input tag="text" className={headerStyles.item} style={{ top:'90%', left:'35%' }}></input>
                <button className={headerStyles.item} style={{ top:'90%', left:'10%' }} onClick={handleSubmit(address,num,name,phone)}>פרסם</button>
                </form>
            </div>}

        </div>

    )
}

export default Header;