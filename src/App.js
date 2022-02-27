import * as React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

const Header = () => {
  return (
    <ul>
      <li><Link to="/" >Home</Link></li>
      <li><Link to="/about" >About</Link></li>
      <li><Link to="/contact" >Contact</Link></li>
    </ul>
  );
}

const Footer = () => {
  return (
    <h3>This is footer</h3>
  );
}

const Home = () => {
  const [users, setUsers] = React.useState([]);
  const [error, setError] = React.useState("No error!");
  const nameRef = React.useRef("");
  const emailRef = React.useRef("");

  function handleGetUsers() {
    axios.get("http://localhost:5000/users")
      .then(response => setUsers(response.data))
      .catch(err => setError(err.message));
  }

  function handlePost() {
    const user = { userName: nameRef.current.value, userEmail: emailRef.current.value };
    axios.post("http://localhost:5000/users", user)
      .then(response => {
        console.log(response.data);
        nameRef.current.value = "";
        emailRef.current.value = "";
      })
      .catch(() => {
        console.log("An error occured.");
      });
  }
  return (
    <>
      <h1>Hello there!</h1>
      <p>{error}</p>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
      <button onClick={handleGetUsers}>Get Users</button>
      <br />
      <input type="text" ref={nameRef} placeholder="Your name" />
      <input type="email" ref={emailRef} placeholder="Your email" />
      <button onClick={handlePost}>Post a request</button>
    </>
  );
}

const About = () => {
  return (
    <h1>This is About</h1>
  );
}

const Contact = () => {
  return (
    <h1>This is Contact</h1>
  );
}

export default App;
