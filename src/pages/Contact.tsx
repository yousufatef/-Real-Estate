import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Textarea } from "../components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
    const contactInfo = [
        {
            icon: MapPin,
            title: "Address",
            details: ["123 Real Estate Ave", "Suite 100", "City, State 12345"],
        },
        {
            icon: Phone,
            title: "Phone",
            details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
        },
        {
            icon: Mail,
            title: "Email",
            details: ["info@realestate.com", "support@realestate.com"],
        },
        {
            icon: Clock,
            title: "Business Hours",
            details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM", "Sun: Closed"],
        },
    ]

    return (
        <div className="min-h-screen py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Ready to find your dream property? Get in touch with our expert team today.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <Card>
                            <CardHeader>
                                <CardTitle>Send us a Message</CardTitle>
                                <CardDescription>
                                    Fill out the form below and we'll get back to you as soon as possible.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName">First Name</Label>
                                        <Input id="firstName" placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName">Last Name</Label>
                                        <Input id="lastName" placeholder="Doe" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="john@example.com" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone</Label>
                                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="subject">Subject</Label>
                                    <Input id="subject" placeholder="I'm interested in..." />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Tell us about your real estate needs..."
                                        className="min-h-[120px]"
                                    />
                                </div>
                                <Button className="w-full">Send Message</Button>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {contactInfo.map((info, index) => (
                                    <Card key={index}>
                                        <CardHeader className="pb-3">
                                            <div className="flex items-center space-x-2">
                                                <info.icon className="h-5 w-5 text-primary" />
                                                <CardTitle className="text-lg">{info.title}</CardTitle>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            {info.details.map((detail, idx) => (
                                                <p key={idx} className="text-muted-foreground text-sm">
                                                    {detail}
                                                </p>
                                            ))}
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        <Card>
                            <CardHeader>
                                <CardTitle>Visit Our Office</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="aspect-video rounded-lg bg-muted flex items-center justify-center">
                                    <p className="text-muted-foreground">Interactive Map Placeholder</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
