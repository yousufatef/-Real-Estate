import { Users, Award, MapPin, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"

export default function AboutPage() {
    const stats = [
        { icon: Users, label: "Happy Clients", value: "10,000+" },
        { icon: Award, label: "Years Experience", value: "15+" },
        { icon: MapPin, label: "Properties Sold", value: "5,000+" },
        { icon: Clock, label: "Average Days on Market", value: "30" },
    ]

    return (
        <div className="min-h-screen py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tight mb-4">About Us</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        We are a leading real estate company dedicated to helping you find your dream home or investment property
                        with personalized service and expert guidance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {stats.map((stat, index) => (
                        <Card key={index} className="text-center">
                            <CardHeader>
                                <stat.icon className="h-8 w-8 mx-auto text-primary" />
                                <CardTitle className="text-2xl">{stat.value}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{stat.label}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                Founded in 2009, our real estate company has been at the forefront of connecting buyers, sellers, and
                                renters with their perfect properties. We understand that real estate is more than just transactions –
                                it's about finding the right place to call home.
                            </p>
                            <p>
                                Our team of experienced professionals combines local market knowledge with cutting-edge technology to
                                provide you with the best possible service. Whether you're buying your first home, selling a property,
                                or looking for the perfect rental, we're here to guide you every step of the way.
                            </p>
                            <p>
                                We pride ourselves on our commitment to transparency, integrity, and exceptional customer service. Our
                                success is measured by your satisfaction and the long-lasting relationships we build with our clients.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            src="/placeholder.svg?height=400&width=600"
                            alt="Our office"
                            className="rounded-lg shadow-lg w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
