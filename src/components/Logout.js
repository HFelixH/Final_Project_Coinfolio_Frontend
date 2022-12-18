import React from "react";
import { Link } from "react-router-dom";
import * as user from "../api/user";

export default function handleLogoutClick({user, setUser}) {
    user
        .logout()
        .then(() => setUser(null))
        .catch((error) => console.log(error)); 
}

