
import { Outlet } from 'react-router-dom';
import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';
import  { Toaster } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Layout = () => {

    return (
        <div>
            <Navbar  />
            <Toaster/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Layout;