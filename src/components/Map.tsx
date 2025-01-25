import L from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { LatLngExpression } from 'leaflet';
import image from '../assets/marker-pointer.png'

type MapProps = {
    latitude: number,
    longitude: number
}

const UpdateMap = ({ latitude, longitude }: MapProps) => {
    const map = useMap()
    map.setView([latitude, longitude], map.getZoom())
    return null
}
const customIcon = new L.Icon({
    iconUrl: image, // URL del icono
    iconSize: [25, 41], // Tamaño del icono
    iconAnchor: [12, 41], // Punto del icono que se alineará con la posición del marcador
    popupAnchor: [1, -34], // Punto desde el cual se abrirá el popup
});


export const Map = ({ latitude, longitude }: MapProps) => {

    const position: LatLngExpression = [latitude, longitude];

    return (
        <MapContainer
            center={position}
            zoom={13}
            style={{ height: '100%', width: '100%' }}

        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position} icon={customIcon}>
                <Popup> Ubicación actual aproximada </Popup>
            </Marker>
            <UpdateMap latitude={latitude} longitude={longitude} />
        </MapContainer>
    )
}
