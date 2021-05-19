import infoStyles from './Info.module.css';
import React, { Component } from 'react'
import Select from 'react-select'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Chip from '@material-ui/core/Chip';
import Apartment from './Apartment';
import { useEffect, useState } from 'react';


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

  var arr = [{value:filterColor1, set:setFilterColor1}, 
    {value:filterColor2, set:setFilterColor2},
    {value:filterColor3, set:setFilterColor3},
    {value:filterColor4, set:setFilterColor4}]

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
        <div className={useStyles().root}>

          <Apartment filters={filters} />
          <Apartment filters={filters} />

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