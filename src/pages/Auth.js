import * as React from 'react';
// import { signInWithGoogle, signOutFirebase } from '../firebase/Firebase';
import './Auth.css';

export const Auth = ({ setLogin, setLogout, setRole, isAdmin, isAuthenticated }) => {
    const [roleAdmin, setRoleAdmin] = React.useState(false);
    const [loginStatus, setLoginStatus] = React.useState(false);

    const handleAdminLogin = () => {
        setLogin();
        setLoginStatus(true);
        setRole("admin");
        setRoleAdmin(true);
    }
    const handleUserLogin = () => {
        setLogin();
        setLoginStatus(true);
        setRole("user");
        setRoleAdmin(false);
    }
    const handleLogout = () => {
        setLogout();
        setLoginStatus(false);
        setRoleAdmin(false);
        // signOutFirebase()
        //     .then(() => {
        //         console.log("Signed out firebase.");
        //     }).catch((error) => {
        //         console.log(error);
        //     });
    }
    // const handleGoogleSignIn = () => {
    //     signInWithGoogle()
    //         .then((result) => {
    //             // The signed-in user info.
    //             const user = result.user;
    //             console.log(user);
    //         }).catch((error) => {
    //             // Handle Errors here.
    //             console.log(error);
    //         });
    // }

    return (
        <div>
            <h1>Log-In / Log-Out</h1>
            {loginStatus && <p>Status: Logged-in</p>}
            {roleAdmin && <p>Role: Admin</p>}
            <button onClick={handleUserLogin}>User Log-In</button>
            <button onClick={handleAdminLogin}>Admin Log-In</button>
            <button onClick={handleLogout}>Log Out</button>
            <br />
            <button
                type="button"
                className="login-with-google-btn"
            // onClick={handleGoogleSignIn}
            >
                Sign in with Google
            </button>
        </div>
    );
}