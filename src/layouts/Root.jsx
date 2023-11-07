import { Outlet } from "react-router-dom";
import Navbar from "../pages/NavBar/NavBar";
import Footer from "../pages/Footer/Footer";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;