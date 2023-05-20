
import { Outlet } from 'react-router-dom';
import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';
import  { Toaster } from 'react-hot-toast';


const Layout = () => {
    return (
        <div>
            <Navbar />
            <Toaster/>
            <Outlet></Outlet>
            <Footer/>
            
        </div>
    );
};

export default Layout;