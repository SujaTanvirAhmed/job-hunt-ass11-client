import * as React from 'react';
import axios from 'axios';

export const Home = () => {
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