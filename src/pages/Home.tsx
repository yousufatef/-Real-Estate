import FilterBar from "../components/shared/FilterBar";

const Home = () => {
    return (
        <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Side */}
            <div className="flex flex-col gap-6">
                <h1 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900 max-w-[550px]">
                    Find Real Estate and Get Your Dream Place
                </h1>
                <p className="text-gray-800 text-base md:text-[18px] max-w-[500px] leading-relaxed">
                    Discover properties that match your lifestyle and budget. From cozy apartments to luxurious villas, we help you find your perfect home.
                </p>
                <FilterBar />

                <div className="flex flex-col md:flex-row justify-between items-center mt-4">
                    {/* Stat Item */}
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-primary mb-2">16+</h1>
                        <p className="text-gray-600 text-sm md:text-base">Years of Experience</p>
                    </div>

                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-primary mb-2">200</h1>
                        <p className="text-gray-600 text-sm md:text-base">Awards Gained</p>
                    </div>

                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-primary mb-2">2000+</h1>
                        <p className="text-gray-600 text-sm md:text-base">Properties Ready</p>
                    </div>
                </div>

            </div>

            {/* Right Side */}
            <div className="flex justify-center md:justify-end">
                <img
                    src="/images/heroImage.jpg"
                    alt="Home Hero"
                    className="w-full max-w-[550px] h-auto object-cover rounded-3xl shadow-lg"
                />
            </div>
        </div>
    );
};

export default Home;
