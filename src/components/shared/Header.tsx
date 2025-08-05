import { Home, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigation = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    const authLinks = (
        <>
            <Link
                to="/login"
                className="text-sm font-medium text-primary hover:underline"
                onClick={() => setIsMenuOpen(false)}
            >
                <Button variant="outline" size="sm">Login</Button>
            </Link>
            <Link
                to="/register"
                className="text-sm font-medium text-primary hover:underline"
                onClick={() => setIsMenuOpen(false)}
            >
                <Button variant="secondary" size="sm">Register</Button>
            </Link>
        </>
    );

    return (
        <nav className="bg-background border-b sticky top-0 z-50" role="navigation" aria-label="Main navigation">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="flex items-center space-x-2">
                        <Home className="h-6 w-6 text-primary" />
                        <span className="font-bold text-xl">RealEstate</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className="text-sm font-medium transition-colors hover:text-primary"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Auth Links */}
                    <div className="hidden md:flex items-center space-x-4">
                        {authLinks}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle Menu"
                            aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden border-t animate-slide-down">
                        <div className="flex flex-col py-4 space-y-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className="text-sm font-medium transition-colors hover:text-primary"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <div className="flex gap-2 py-2 space-y-2">
                            {authLinks}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
