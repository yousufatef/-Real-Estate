import { MapContainer, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import type { ItemProps } from '../../../types';
import Pin from './Pin';

export function MapSection({ items }: { items: ItemProps[] }) {
    return (
        <MapContainer
            center={[52.4797, -1.90269]}
            zoom={7}
            scrollWheelZoom={false}
            className="h-[600px] w-full rounded-xl"
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {items.map((item: ItemProps) => (
                <Pin key={item.id} item={item} />
            ))}
        </MapContainer>
    );
}