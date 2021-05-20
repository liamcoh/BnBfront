import infoStyles from './Info.module.css';
import React, { Component } from 'react'
import Select from 'react-select'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Chip from '@material-ui/core/Chip';
import Apartment from './Apartment';
import { useEffect, useState } from 'react';
import axios from "axios";


const chips = [
  'יש מרחב מוגן',
  'כשר',
  'חיות מחמד',
  'גישה לנכים'
]

const useStyles = makeStyles({
  root: {
  },
  chip: {
    margin: '20px',
  },
});

function Info({ filters }) {
  
  const[filterColor1, setFilterColor1] = useState('default');
  const[filterColor2, setFilterColor2] = useState('default');
  const[filterColor3, setFilterColor3] = useState('default');
  const[filterColor4, setFilterColor4] = useState('default');
  const[houses, setHouses] = useState([])

  var arr = [{value:filterColor1, set:setFilterColor1}, 
    {value:filterColor2, set:setFilterColor2},
    {value:filterColor3, set:setFilterColor3},
    {value:filterColor4, set:setFilterColor4}]

  useEffect(async () => {
    const res = await axios.get("http://hashlama005team8.azurewebsites.net/houses");
    setHouses(res.data)
  });

  return (
    <div className={infoStyles.info}>
      <div className={infoStyles.navbar}>
        מקומות אירוח
            </div>
      <div>
        <div className={infoStyles.filters}>
        {
           filters.map((filter, index) => <Chip 
            key={filter} 
            className={infoStyles.chip} 
            label={filter.label}
            clickable
            color={arr[index].value}
            onClick={() => { if(arr[index].value == 'default') 
            arr[index].set('primary') 
            else arr[index].set('default') }}
            style={{marginLeft:'10px', width:'90px'}} 
            />)
        }
        </div>
        <div className={useStyles().root} style={{ overflow:'scroll', height: '670px' }}>
          {houses.map(e => <Apartment filters={filters} apt={e} />)}
          {/* <Typography className={infoStyles.SliderText} id="discrete-slider" gutterBottom>
            מספר נפשות
          </Typography>
          <Slider
            defaultValue={1}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={10}
          /> */}

        </div>
      </div>
    </div>
  )
}

export default Info;