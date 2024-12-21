import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { LatLngExpression } from 'leaflet';

type MapProps = {
    latitude: number,
    longitude: number
}

const UpdateMap = ({latitude,longitude} : MapProps) => { 
    const map = useMap()
    map.setView([latitude,longitude], map.getZoom())
    return null
}


export const Map = ({latitude, longitude} : MapProps) => {
    
    const position: LatLngExpression = [latitude, longitude];

    return (
        <MapContainer
            center={position}
            zoom={13}
            style={{ height: '100%', width: '100%' }}
            
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position}>
                <Popup> Marcador Aqui </Popup>
            </Marker>
            <UpdateMap latitude={latitude} longitude={longitude}/>
        </MapContainer>
    )
}
