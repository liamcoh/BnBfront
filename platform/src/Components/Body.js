import bodyStyles from './Body.module.css';
import Map from './Map';
import Info from './Info';

function Body ({filters}) {

    return (
        <div className={bodyStyles.Body}>
            <Info filters={filters}/>
            <Map />
        </div>
    )
}

export default Body;