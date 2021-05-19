import logo from '../Assets/SnowHouse.gif'
//import headerStyles from './Header.module.css';

function Header () {

    return (
        <div>
            <nav class="navbar navbar-dark bg-dark">
                <a class="navbar-brand" href="#">
                <img src={logo} width="30" height="30" class="d-inline-block align-top" alt=""/>
                בומבום פאו
                <button>הוסף</button>
                </a>
            </nav>
        </div>
    )
}

export default Header;