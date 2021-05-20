import logo from '../Assets/SnowHouse.gif'
import headerStyles from './Header.module.css';

function Header () {

    return (
        <div>
<<<<<<< HEAD
            <div className={headerStyles.flexBox}>
                <div className={headerStyles.flexBox2}>
                    <img className={headerStyles.img} src={logo} alt=""/> 
                    <div className={headerStyles.text}>בומבום פאו</div>
                </div>
                <button className={headerStyles.button}>הוסף מקום אירוח</button>
            </div>


=======
            <nav class="navbar navbar-dark bg-dark">
                <a class="navbar-brand" href="#">
                <img src={logo} width="30" height="30" class="d-inline-block align-top" alt=""/>
                בומבום פאו
                <button>הוסף</button>
                </a>
            </nav>
>>>>>>> map
        </div>
    )
}

export default Header;