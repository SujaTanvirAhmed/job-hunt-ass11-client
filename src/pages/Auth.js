export const Auth = ({ setUser, setAdmin, setLogout, isAdmin, isAuthenticated }) => {

    const handleAdminLogin = () => {
        setAdmin();
    }
    const handleUserLogin = () => {
        setUser();
    }
    const handleLogout = () => {
        setLogout();
    }

    return (
        <div>
            <h1>Log-In / Log-Out</h1>
            {isAdmin() && <p>This is Admin</p>}
            {/* {(isAuthenticated() && !isAdmin()) && <p>This is User</p>} */}
            <button onClick={handleUserLogin}>User Log-In</button>
            <button onClick={handleAdminLogin}>Admin Log-In</button>
            <button onClick={handleLogout}>Log Out</button>
        </div>
    );
}