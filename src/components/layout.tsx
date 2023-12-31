// import { ReactNode } from "react";
import SideBare from "./sidebar/sidebar";
import Header from "./header/header";
import { Outlet } from "react-router-dom";
import './layout.css'
// interface LayoutProps {
//     readonly children: ReactNode;
// }

function Layout() {
    return (

        <div className="flex h-screen">
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header />
                <div className="flex h-full">
                    <SideBare />
                    <main className="flex flex-col w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black overflow-x-hidden overflow-y-auto mb-14">
                        <ul className="circles h-full">
                            {[...Array(12)].map((_, index) => (
                                <li key={index}> </li>
                            ))}
                        </ul>
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>

    );
}

export default Layout;
