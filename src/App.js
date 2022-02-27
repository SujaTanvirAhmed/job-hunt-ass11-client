//-------------------------------------------------
// Deployed to: https://job-hunt-ass11.web.app/
//-------------------------------------------------

import './App.css';
// import modules
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PrivateRoute } from './components/PrivateRoute';

import { About } from './pages/About';
import { Auth } from './pages/Auth';
import { Contact } from './pages/Contact';
import { Dashboard } from './pages/Dashboard';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';

export const App = () => {

  const appUser = "job-hunt-ass11-user";
  const loggedYes = "LOGGED_IN";
  const loggedNo = "LOGGED_OUT";
  const roleUser = "user";
  const roleAdmin = "admin";
  const roleNone = "none";
  const setUser = () => {
    localStorage.setItem(appUser, JSON.stringify({ status: loggedYes, role: roleUser }));
  }
  const setAdmin = () => {
    localStorage.setItem(appUser, JSON.stringify({ status: loggedYes, role: roleAdmin }));
  }
  const setLogout = () => {
    localStorage.setItem(appUser, JSON.stringify({ status: loggedNo, role: roleNone }));
  }
  const isAuthenticated = () => {
    return JSON.parse(localStorage.getItem(appUser)).status === loggedYes;
  }
  const isAdmin = () => {
    if (isAuthenticated() && JSON.parse(localStorage.getItem(appUser)).role === "admin") {
      return true;
    }
    return false;
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>}
          />
          <Route path="/auth" element={<Auth
            setUser={setUser}
            setAdmin={setAdmin}
            setLogout={setLogout}
            isAdmin={isAdmin}
            isAuthenticated={isAuthenticated}
          />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );

}