"use client";
import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = (props) => {
    const [user, setUser] = useState("");
    const [emailId, setEmailId] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                emailId,
                setEmailId,
                isLoggedIn,
                setIsLoggedIn,
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
};

export const useCredentials = () => {
    const userDetails = useContext(UserContext);
    return userDetails;
};
