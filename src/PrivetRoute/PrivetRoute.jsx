import React from 'react';
import { useContext } from "react";

import { Navigate } from 'react-router-dom';
import { AuthContex } from '../AuthProvider/AuthProvider';

const PrivetRoute = ({ children }) => {
    const { user, loding } = useContext(AuthContex);
    if (loding) {
        return <progress className="progress w-56"></progress>
    }

    if (user) {
        return children;
    }

    return <Navigate state={{from: location}} to="/login" replace></Navigate>
};

export default PrivetRoute;