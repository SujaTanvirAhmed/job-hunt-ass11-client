import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ Component }) => {

    const user = "job-hunt-ass11-user";
    const loggedYes = "LOGGED_IN";
    const isAuthenticated = () => localStorage.getItem(user) === loggedYes;

    return isAuthenticated() ? <Component /> : <Navigate to="/auth" />
}