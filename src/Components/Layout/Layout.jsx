
import { Outlet } from 'react-router-dom';
import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Layout;