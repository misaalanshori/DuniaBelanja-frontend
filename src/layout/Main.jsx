import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
export default function Mainlayout() {
    return (
        <div className="w-full h-full flex flex-col">
            <NavigationBar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}