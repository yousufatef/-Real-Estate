
import { MapPin, Bed, Bath, Bookmark, Share } from "lucide-react";
import { Button } from "../../../components/ui/button";

interface PropertyCardProps {
    id: string;
    title: string;
    address: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    image: string;
}

export function PropertyCard({
    title,
    address,
    price,
    bedrooms,
    bathrooms,
    image
}: PropertyCardProps) {
    return (
        <div className="flex flex-col md:flex-row p-2">
            <div className="md:w-80 h-48 md:h-auto ">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover rounded-2xl"
                />
            </div>

            <div className="flex-1 p-4">
                <div className="flex flex-col gap-2 mb-2">
                    {/* title */}
                    <h3 className="text-[18px] font-semibold text-gray-800 leading-tight">
                        {title}
                    </h3>
                    {/* location  */}
                    <div className="flex items-center text-gray-600 mb-2">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm">{address}</span>
                    </div>
                    {/* amenities */}
                    <div className="flex items-center gap-4 text-gray-600">
                        <div className="flex justify-between items-center gap-1">
                            <Bed className="w-4 h-4" />
                            <span className="text-sm">{bedrooms} bedroom</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Bath className="w-4 h-4" />
                            <span className="text-sm">{bathrooms} bathroom</span>
                        </div>
                    </div>


                </div>

                <div className="flex items-center justify-between mt-4">
                    {/* price */}
                    <div className="text-[16px] bg-amber-200 px-2 py-1 rounded-xl font-bold text-gray-800">
                        ${price.toLocaleString()}
                    </div>
                    {/* save button */}
                    <div className="flex gap-2 ml-4">
                        <Button variant="outline" size="icon" className="h-8 w-8">
                            <Bookmark className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="h-8 w-8">
                            <Share className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}