import * as React from 'react';
import { Banner } from '../components/banner/Banner';
import { Features } from "../components/features/Features";
import { Services } from "../components/services/Services";
// import axios from 'axios';

export const Home = () => {
    // const [users, setUsers] = React.useState([]);
    // const [error, setError] = React.useState("No error!");
    // const nameRef = React.useRef("");
    // const emailRef = React.useRef("");

    // function handleGetUsers() {
    //     axios.get("http://localhost:5000/users")
    //         .then(response => setUsers(response.data))
    //         .catch(err => setError(err.message));
    // }

    // function handlePost() {
    //     const user = { userName: nameRef.current.value, userEmail: emailRef.current.value };
    //     axios.post("http://localhost:5000/users", user)
    //         .then(response => {
    //             console.log(response.data);
    //             nameRef.current.value = "";
    //             emailRef.current.value = "";
    //         })
    //         .catch(() => {
    //             console.log("An error occured.");
    //         });
    // }
    return (
        <div>
            <Banner />
            <Services />
            <Features />
        </div>
    );
}