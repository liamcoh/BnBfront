import React, { Fragment, Component } from 'react'
import styles from './Apartment.module.css';
import Divider from '@material-ui/core/Divider';
import { style } from '@material-ui/system';
import Chip from '@material-ui/core/Chip';

function Apartment({ filters }) {
    return (
        <Fragment >
            <Divider />

            <div className={styles.apartment}>
                <img
                    className={styles.img}
                    src='https://cf.bstatic.com/images/hotel/max1024x768/213/213503501.jpg' />

                <div className={styles.details}>
                    <div>
                        השופטים 2, נס ציונה
                    </div>
                    <div>
                        מספר מתארחים: 3
                    </div>
                    <div >
                        שייקה רגב
                    </div>
                    <div>
                        טלפון: 0528012143
                    </div>
                    <div>
                        <div className={styles.filters}>
                            {
                                filters.map(filter => <Chip style={{width:'90px'}} key={filter} variant="outlined" className={styles.chip} label={filter.label} />)
                            }
                        </div>


                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Apartment;