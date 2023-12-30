// import { ReactNode } from "react";
import SideBare from "./sidebar/sidebar";
import Header from "./header/header";
import { Outlet } from "react-router-dom";

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
                    <main className="flex flex-col w-full bg-white overflow-x-hidden overflow-y-auto mb-14">
                        <Outlet/>
                    </main>
                </div>
            </div>
        </div>

    );
}

export default Layout;
