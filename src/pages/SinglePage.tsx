const SinglePage = () => {

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2 bg-amber-800 h-50 w-full">

                    </div>
                    {/* Map Section */}
                    <div className="lg:sticky lg:top-20 bg-blue-900 h-50 w-full">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SinglePage;