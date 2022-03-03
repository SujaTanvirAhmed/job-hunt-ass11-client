import * as React from "react";
import "./Contact.css";

export const Contact = () => {
    const [loginForm, setLoginForm] = React.useState(true);
    const handleFormChange = () => {
        setLoginForm(!loginForm);
    }

    const handleGoogleSignIn = () => { }

    return (
        <div className="contact">
            <div className="container">
                <div className="contact-group">
                    <form>
                        <h3 className="form-title">{loginForm ? "Login" : "Register"}</h3>
                        <div className="form-items">
                            <input type="email" placeholder="Your email" className="contact-input" required />
                            {!loginForm && <input type="text" placeholder="Your phone number" className="contact-input" required />}
                            <input type="password" placeholder="Your password" className="contact-input" required />
                            {!loginForm && <input type="password" placeholder="Confirm password" className="contact-input" required />}

                            <button type="submit" className="btn log-btn">{loginForm ? "Log-in" : "Register"}</button>
                            {!loginForm && <><p className="or-para">Or,</p>
                                <button
                                    type="button"
                                    className="login-with-google-btn"
                                    onClick={handleGoogleSignIn}
                                >Login With Google</button></>}
                        </div>
                    </form>
                    <div className="other-option">
                        <h4 className="contact-query">{loginForm ? "Don't have an account?" : "Already have an account?"}</h4>
                        <button className="btn reg-btn" onClick={handleFormChange}>{loginForm ? "Register" : "Log-in"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}