import { Marker, Popup } from "react-leaflet"
import { Link } from "react-router-dom";
import type { ItemProps } from "../../../types";


const Pin = ({ item }: { item: ItemProps }) => {
    return (
        <Marker position={[item.latitude, item.longitude]}>
            <Popup>
                <div className="flex flex-col  gap-1">
                    <img src={item.img} alt={item.title} className="rounded-sm" />
                    <div className="flex items-center justify-between gap-2">
                        <span>{item.bedroom} bedroom</span>
                        <b className="text-yellow-700">$ {item.price}</b>
                    </div>
                    <Link to={`/${item.id}`}>{item.title}</Link>
                </div>
            </Popup>
        </Marker>
    )
}

export default Pin