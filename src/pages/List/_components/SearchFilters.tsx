
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Search } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select";

interface SearchFiltersProps {
    onSearch: () => void;
}

export function SearchFilters({ onSearch }: SearchFiltersProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Search results for</h2>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-2">Location</label>
                <Input
                    placeholder="City Location"
                    className="w-full"
                    defaultValue="City Location"
                />
            </div>

            <div className="flex max-sm:flex-col md:items-end gap-2">
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Type</label>
                    <Select defaultValue="any">
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="any">any</SelectItem>
                            <SelectItem value="apartment">Apartment</SelectItem>
                            <SelectItem value="house">House</SelectItem>
                            <SelectItem value="condo">Condo</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Property</label>
                    <Select defaultValue="any">
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="any">any</SelectItem>
                            <SelectItem value="sale">For Sale</SelectItem>
                            <SelectItem value="rent">For Rent</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Min Price</label>
                    <Input placeholder="any" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Max Price</label>
                    <Input placeholder="any" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Bedroom</label>
                    <Select defaultValue="any">
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="any">Any</SelectItem>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4+</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <Button
                    onClick={onSearch}
                    className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-medium"
                >
                    <Search className="w-4 h-4" />
                </Button>
            </div>
        </div>
    );
}