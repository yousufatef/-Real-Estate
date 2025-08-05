import { SearchFilters } from "./SearchFilters";
import { PropertyCard } from "./PropertyCard";
import { MapSection } from "./MapSection";

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
    }
];

export function ListPage() {
    const handleSearch = () => {
        console.log("Searching...");
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                {/* Search Filters */}
                <SearchFilters onSearch={handleSearch} />

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Property Listings */}
                    <div className="space-y-6">
                        {mockProperties.map((property) => (
                            <PropertyCard
                                key={property.id}
                                {...property}
                            />
                        ))}
                    </div>

                    {/* Map Section */}
                    <div className="lg:sticky lg:top-8 h-fit">
                        <MapSection />
                    </div>
                </div>
            </div>
        </div>
    );
}