import mapStyles from './Map.module.css';
import React, { useRef, useEffect, useState } from 'react';
import Marker from 'react-map-gl'
import axios from "axios";

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax 
mapboxgl.accessToken = "pk.eyJ1IjoiZGFuaWVscm9nZWwiLCJhIjoiY2tvdm9ydnliMDR0bDJ2bGtseG50eDR5aSJ9.UPXeABI7QQl17yRrXgUVIA"

async function ExtractDB() {


}

function FilterTable() {

    //return []
}

function PopulateMarkers() {
    //object pins[] = FilterTable("filter string", table);
    //Foreach pin, create pin tag with coordinates and details

}

function Map() {

    //const mapContainer = useRef(null);
    const mapContainer = React.createRef();
    const [house, sethouses] = useState(null)
    const map = useRef(null);
    const [lng, setLng] = useState(34.851);
    const [lat, setLat] = useState(31.046);
    const [zoom, setZoom] = useState(7);

    useEffect(async () => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });

        var response = await axios.get("http://hashlama005team8.azurewebsites.net/houses")
        response.data.forEach(element => {
            map.current.on('load', () => {
                new mapboxgl.Marker(map.current.container)
                    .setLngLat([element.address.lng, element.address.lat])
                    .addTo(map.current);
            });
        });
    });

    return (
        <div style={{ width:"50%" }}>
            <Marker></Marker>
            <div ref={mapContainer} className="map-container" />
        </div>
    );

}

export default Map;