import { Outlet } from "react-router-dom";
import { Header } from "../header";

export default function Root() {
    return (
        <>
            <Header />
            <div className="pt-24 px-14">
                <Outlet />
            </div>
        </>
    )
}