
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <h1>this is layotu</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;