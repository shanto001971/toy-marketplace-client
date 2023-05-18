import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase/Firebase.config";
import { createContext, useEffect, useState } from "react";

const AuthContex = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({})
    const [loding, setLoding] = useState(true);

    const createUser = (email, password) => {
        setLoding(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const LoginUser = (email, password) => {
        setLoding(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const LogOutUser = () => {
        setLoding(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsucribeUser = onAuthStateChanged(auth, carrentUser => {
            setUser(carrentUser)
            setLoding(false)
        })
        return () => {
            return unsucribeUser();
        }
    }, []);

    const authInfo = {
        createUser,
        LoginUser,
        LogOutUser,
        user,
        setUser,
        loding

    }
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;