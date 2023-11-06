import  { useState, useEffect } from "react";
import './App.css';
import Table from "./table";

function App() {
    const [showTable, setShowTable] = useState(false);

    useEffect(() => {
        // Set a timeout to show the table after 5 seconds
        const timeout = setTimeout(() => {
            setShowTable(true);
        }, 5000);

        // Clean up the timeout if the component unmounts
        return () => clearTimeout(timeout);
    }, []);
    return (
        <div className="w-full h-screen absolute z-[-1] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
            <ul className="circles absolute top-0 left-0 w-full !h-screen overflow-hidden">
                {[...Array(15)].map((_, index) => (
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
            <div className={`fade-in ${showTable ? "show" : ""}`}>
                {showTable && <Table />}
            </div>
        </div>
    );
}

export default App;
