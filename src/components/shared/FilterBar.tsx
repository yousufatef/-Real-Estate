import { useState } from "react"

import { Search } from "lucide-react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

type PropertyType = "buy" | "rent"

export default function FilterBar() {
    const [propertyType, setPropertyType] = useState<PropertyType>("buy")
    const [cityLocation, setCityLocation] = useState("")
    const [minPrice, setMinPrice] = useState("")
    const [maxPrice, setMaxPrice] = useState("")

    const handleSearch = () => {
        console.log("Searching with filters:", {
            propertyType,
            cityLocation,
            minPrice,
            maxPrice,
        })
    }

    return (
        <div className="mb-8">
            <div className="flex flex-col">
                {/* Buy/Rent Toggle */}
                <div className="w-fit flex overflow-hidden">
                    <button
                        onClick={() => setPropertyType("buy")}
                        className={`border-1 rounded-none px-6 py-3 text-sm font-medium transition-colors ${propertyType === "buy" ? "bg-black text-white" : "bg-white text-gray-700 hover:bg-gray-50"
                            }`}
                    >
                        Buy
                    </button>
                    <button
                        onClick={() => setPropertyType("rent")}
                        className={`border-1 rounded-none px-6 py-3 text-sm font-medium transition-colors ${propertyType === "rent" ? "bg-black text-white" : "bg-white text-gray-700 hover:bg-gray-50"
                            }`}
                    >
                        Rent
                    </button>
                </div>

                {/* Input Fields */}
                <div className="flex flex-1 gap-0 overflow-hidden">
                    <Input
                        placeholder="City Location"
                        value={cityLocation}
                        onChange={(e) => setCityLocation(e.target.value)}
                        className="border-1  px-6 py-5 border-gray-200 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                    <Input
                        placeholder="Min Price"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        className="border-1  px-6 py-5 border-gray-200 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                    <Input
                        placeholder="Max Price"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        className="border-1  px-6 py-5 border-gray-200 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                    {/* Search Button */}
                    <Button
                        onClick={handleSearch}
                        className="bg-yellow-400 rounded-none border-1 border-y-amber-400 hover:bg-yellow-500 text-black px-6 py-5"
                    >
                        <Search className="h-4 w-4" />
                    </Button>
                </div>

            </div>
        </div>
    )
}
