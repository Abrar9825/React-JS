import { Outlet } from "react-router-dom";
import HeaderComponent from "../header";

export default function Layout() {
    return (
        <div>
            <HeaderComponent />
            <Outlet/>{/* This is nothing but a Renders the child route's element, if there is one.*/ }
        </div>
    )
}