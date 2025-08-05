import { Plus, Minus, MapPin } from "lucide-react";
import { Card } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";

const mapPins = [
    { id: 1, top: '15%', left: '75%' },
    { id: 2, top: '35%', left: '72%' },
    { id: 3, top: '45%', left: '80%' },
    { id: 4, top: '55%', left: '78%' },
    { id: 5, top: '65%', left: '15%' },
    { id: 6, top: '75%', left: '85%' },
    { id: 7, top: '25%', left: '25%' },
    { id: 8, top: '40%', left: '35%' },
];

export function MapSection() {
    return (
        <Card className="h-full min-h-[500px] overflow-hidden relative">
            {/* Map Background */}
            <div
                className="w-full h-full bg-gradient-to-br from-blue-100 via-green-50 to-blue-200 relative"
                style={{
                    backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(120, 180, 255, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)
          `
                }}
            >
                {/* Great Britain outline suggestion */}
                <div className="absolute inset-0 opacity-30">
                    <svg className="w-full h-full" viewBox="0 0 400 600" fill="none">
                        <path
                            d="M200 50 Q250 80 280 150 Q290 200 270 250 Q280 300 260 350 Q240 400 220 450 Q200 500 180 450 Q160 400 140 350 Q120 300 130 250 Q110 200 120 150 Q150 80 200 50Z"
                            fill="rgba(34, 197, 94, 0.1)"
                            stroke="rgba(34, 197, 94, 0.2)"
                            strokeWidth="2"
                        />
                    </svg>
                </div>

                {/* Map Pins */}
                {mapPins.map((pin) => (
                    <div
                        key={pin.id}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2"
                        style={{ top: pin.top, left: pin.left }}
                    >
                        <div className="bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors cursor-pointer">
                            <MapPin className="w-4 h-4" />
                        </div>
                    </div>
                ))}

                {/* Map Controls */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <Button
                        variant="outline"
                        size="icon"
                        className="bg-white hover:bg-gray-50 h-10 w-10"
                    >
                        <Plus className="w-4 h-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="bg-white hover:bg-gray-50 h-10 w-10"
                    >
                        <Minus className="w-4 h-4" />
                    </Button>
                </div>

                {/* Region Labels */}
                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-gray-600 font-medium text-sm opacity-60">
                    Great Britain
                </div>
            </div>
        </Card>
    );
}