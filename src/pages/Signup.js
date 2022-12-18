import React, {useState} from "react";
import * as client from "../api/user";

function SignUp({setUser}) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [passwordConfirmation, setPasswordConfirmation] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        client
            .signup({username, email, password})
            .then((response) => setUser(response.data))
            .catch((error) => console.log(error));
    }

    return (
        <div>
            <form onsubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    autoComplete="off"
                />
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="off"
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="off"
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;