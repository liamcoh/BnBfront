import logo from '../Assets/SnowHouse.gif'
import headerStyles from './Header.module.css';

function Header () {

    return (
        <div>
            <div className={headerStyles.flexBox}>
                <div className={headerStyles.flexBox2}>
                    <img className={headerStyles.img} src={logo} alt=""/>
                    <div className={headerStyles.text}>בומבום פאו</div>
                </div>
                <button className={headerStyles.button}>הוסף מקום אירוח</button>
            </div>


        </div>

    )
}

export default Header;