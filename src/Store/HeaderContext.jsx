import React, { useEffect, useState } from "react";
import { getLanguages } from "../APIs/LanguagesProvider";

export const HeaderContext = React.createContext({
    title: {},
    setTitle: () => {undefined}
});

export const HeaderContextProvider = (props) => {
    const [title, setTitle] = useState("")
    

    return <HeaderContext.Provider value={{
        title,
        setTitle,
    }}>
        {props.children}    
    </HeaderContext.Provider>
};

