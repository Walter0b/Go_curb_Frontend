return (
    <div className="w-full h-screen absolute z-[-1] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
        <ul className="circles absolute top-0 left-0 w-full h-full overflow-hidden">
            {[...Array(12)].map((_, index) => (
                <li key={index}> </li>
            ))}
        </ul>
        <div className="flex h-20 items-center justify-center ">
            <div className="w-max">
                <h1
                    className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-4xl text-white font-bold">
                    Airbooks Customer Table
                </h1>
            </div>
        </div>

    </div>

);