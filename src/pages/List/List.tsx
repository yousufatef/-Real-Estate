import { listData } from "../../lib/dummydata";
import { MapSection } from "./_components/MapSection";
import { PropertyCard } from "./_components/PropertyCard";
import { SearchFilters } from "./_components/SearchFilters";


const mockProperties = [
    {
        id: "1",
        title: "A Great Apartment Next to the Beach!",
        address: "456 Park Avenue, London",
        price: 1000,
        bedrooms: 2,
        bathrooms: 1,
        image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        id: "2",
        title: "An Awesome Apartment Near the Park! Almost too good to be true!",
        address: "789 Oxford Street, London",
        price: 1500,
        bedrooms: 3,
        bathrooms: 2,
        image: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        id: "3",
        title: "A Cozy Cottage in the Countryside",
        address: "123 Country Lane, London",
        price: 1200,
        bedrooms: 2,
        bathrooms: 1,
        image: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        id: "4",
        title: "An Awesome Apartment Near the Park! Almost too good to be true!",
        address: "789 Oxford Street, London",
        price: 1500,
        bedrooms: 3,
        bathrooms: 2,
        image: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
];

const List = () => {
    const data = listData.map(item => ({
        ...item,
        id: String(item.id),
    }));

    const handleSearch = () => {
        console.log("Searching...");
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                        {/* Search Filters */}
                        <SearchFilters onSearch={handleSearch} />
                        {/* Property Listings */}
                        <div className="space-y-6">
                            {mockProperties.map((property) => (
                                <PropertyCard
                                    key={property.id}
                                    {...property}
                                />
                            ))}
                        </div>
                    </div>
                    {/* Map Section */}
                    <div className="lg:sticky lg:top-20 h-fit">
                        <MapSection items={data} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default List;