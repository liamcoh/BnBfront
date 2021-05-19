import bodyStyles from './Body.module.css';
import Map from './Map';
import Info from './Info';

function Body ({filters}) {

    return (
        <div className={bodyStyles.Body}>
            <Map />
            <Info filters={filters}/>
        </div>
    )
}

export default Body;