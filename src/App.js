import { useState, useRef } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [users, setUsers] = useState([]);
  const [error, setError] = useState("No error!");
  const nameRef = useRef("");
  const emailRef = useRef("");

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
    <div className="App">
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
    </div>
  );
}

export default App;
