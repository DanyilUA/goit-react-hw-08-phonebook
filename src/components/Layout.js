import { Outlet } from "react-router-dom";
import { AppBar } from "./AppBar/AppBar"
import { Suspense } from "react";
import RiseLoader from 'react-spinners/RiseLoader';


export const Layout = () => {

    return (
        <div>
            <AppBar />
            <Suspense fallback={RiseLoader}>
                <Outlet />
            </Suspense>
        </div>
    );
};