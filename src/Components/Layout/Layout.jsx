
import { Outlet } from 'react-router-dom';
import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';
import  { Toaster } from 'react-hot-toast';

// import 'aos/dist/aos.css';


const Layout = () => {

    // useEffect(() => {
    //     AOS.init({
    //       offset: 200,
    //       duration: 1000,
    //     });
    //   }, [])

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