import React, {useState} from "react";
import * as client from "../api/user";

function Profile({user, setUser}) {
    const [username, setUsername] = useState(user.username);
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        client
        .updateProfile({username , password})
        .then((response) => setUser(response.data))
        .catch((error) => console.log(error));
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>{user.username}'s Profile</h1>

            <label htmlFor="username">Username</label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="off"
            />

            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
            />

            <button type="submit">Update Profile</button>
        </form>
    )
}

export default Profile;