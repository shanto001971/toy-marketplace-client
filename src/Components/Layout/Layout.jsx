
import { Outlet } from 'react-router-dom';
import Navbar from '../NavBar/Navbar';

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;