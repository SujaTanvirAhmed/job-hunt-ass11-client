//-------------------------------------------------
// Deployed to: https://job-hunt-ass11.web.app/
//-------------------------------------------------
// https://www.wowclub.com/
// https://www.tourmyindia.com/

// import modules
import * as React from "react";
import { firebaseAuthState } from "./firebase-auth/FirebaseAuth";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Header } from './components/header/Header';
// import { Features } from './components/features/Features';
import { Footer } from './components/footer/Footer';
import { PrivateRoute } from './components/PrivateRoute';
// import { Services } from './components/services/Services';

import { About } from './pages/about/About';
import { ManageAllOrders } from './pages/manage-all-orders/ManageAllOrders';
import { Contact } from './pages/contact/Contact';
import { Dashboard } from './pages/Dashboard';
import { Home } from './pages/Home';
import { Order } from './pages/order/Order';
import { ManageOrders } from './pages/ManageOrders';
import './App.css';

export const App = () => {

  const [userEmail, setUserEmail] = React.useState("");

  React.useEffect(() => {
    firebaseAuthState((user) => {
      if (user) {
        setUserEmail(user.email);
      }
    });
  }, []);


  // const appUser = "job-hunt-ass11-user";
  // const loggedYes = "LOGGED_IN";
  // const loggedNo = "LOGGED_OUT";
  // const roleAdmin = "ADMIN";
  // const roleNone = "NONE";
  // const getInfo = () => JSON.parse(localStorage.getItem(appUser));
  // const setLogin = () => {
  //   const infoObj = { status: loggedYes, role: roleNone };
  //   localStorage.setItem(appUser, JSON.stringify(infoObj));
  // }
  // const setLogout = () => {
  //   const infoObj = { status: loggedNo, role: roleNone };
  //   localStorage.setItem(appUser, JSON.stringify(infoObj));
  // }
  // const setRole = (userRole) => {
  //   const infoObj = getInfo();
  //   infoObj.role = userRole.toUpperCase();
  //   localStorage.setItem(appUser, JSON.stringify(infoObj));
  // }
  // const isAuthenticated = () => {
  //   const infoObj = getInfo();
  //   return infoObj.status === loggedYes;
  // }
  // const isAdmin = () => {
  //   const infoObj = getInfo();
  //   return infoObj.role === roleAdmin;
  // }

  return (
    <BrowserRouter>
      <div className="App">
        <Header
          userEmail={userEmail}
          setUserEmail={setUserEmail}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={
            userEmail === "" ? <Contact /> : <Navigate to="/" />
          } />
          <Route path="/order" element={<Order />} />
          <Route path="/manage-orders" element={<ManageOrders />} />
          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>}
          />
          <Route path="/manage-all-orders" element={<ManageAllOrders />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );

}