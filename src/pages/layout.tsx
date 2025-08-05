import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div>
            <Header />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default Layout;