import React, { useEffect, useState } from "react";
import { getUser } from "../APIs/UserProvider";

export const UserContext = React.createContext({
    user: {},
    setUser: () => {undefined}
});

export const UserContextProvider = (props) => {
    const [user, setUser] = useState(null)
    
    function saveUser(user) {
        setUser(user)
        localStorage.setItem('user', JSON.stringify(user))
    }

    useEffect(() => {
        (async () => {
            if (localStorage.getItem('user')) {
                const userFromStorage = localStorage.getItem('user')
                setUser(JSON.parse(userFromStorage))
            }
        })()
    }, [])

    return <UserContext.Provider value={{
        user,
        setUser: saveUser,
    }}>
        {props.children}    
    </UserContext.Provider>
};

