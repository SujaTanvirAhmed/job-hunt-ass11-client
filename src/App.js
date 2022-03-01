//-------------------------------------------------
// Deployed to: https://job-hunt-ass11.web.app/
//-------------------------------------------------
// https://www.wowclub.com/
// https://www.tourmyindia.com/

import './App.css';
// import modules
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components/header/Header';
import { Features } from './components/features/Features';
import { Footer } from './components/footer/Footer';
import { PrivateRoute } from './components/PrivateRoute';
import { Services } from './components/services/Services';

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
  const roleAdmin = "ADMIN";
  const roleNone = "NONE";
  const getInfo = () => JSON.parse(localStorage.getItem(appUser));
  const setLogin = () => {
    const infoObj = { status: loggedYes, role: roleNone };
    localStorage.setItem(appUser, JSON.stringify(infoObj));
  }
  const setLogout = () => {
    const infoObj = { status: loggedNo, role: roleNone };
    localStorage.setItem(appUser, JSON.stringify(infoObj));
  }
  const setRole = (userRole) => {
    const infoObj = getInfo();
    infoObj.role = userRole.toUpperCase();
    localStorage.setItem(appUser, JSON.stringify(infoObj));
  }
  const isAuthenticated = () => {
    const infoObj = getInfo();
    return infoObj.status === loggedYes;
  }
  const isAdmin = () => {
    const infoObj = getInfo();
    return infoObj.role === roleAdmin;
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Services />
        <Features />
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
            setLogin={setLogin}
            setLogout={setLogout}
            setRole={setRole}
            isAdmin={isAdmin}
            isAuthenticated={isAuthenticated}
          />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );

}
// hello there