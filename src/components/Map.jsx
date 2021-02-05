import React,{useEffect,useState} from 'react';
import {MapContainer,Popup,Marker,TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {iconPerson} from './Icon'


const Map = (props) =>{
    useEffect(()=>{
        console.log(props.data);
    })
    const [lat,setLat] = useState(props.data.lat);
    const [lon,setLon] = useState(props.data.lng);

    return(
        <MapContainer center={[lat,lon]} zoom={10} scrollWheelZoom={false} style={{height:"100%",width:"100%"}}>
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[lat,lon]} icon={iconPerson}>

            </Marker>
        </MapContainer>
    )
}
 
export default Map;