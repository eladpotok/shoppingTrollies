import React, { useEffect, useState } from "react";
import { getLanguages } from "../APIs/LanguagesProvider";

export const LanguagesContext = React.createContext({
    languages: {},
    setLanguages: () => {undefined}
});

export const LanguagesContextProvider = (props) => {
    const [languages, setLanguages] = useState(null)
    
    useEffect(() => {
        (async () => {
            // if (!localStorage.getItem('currLang')) {
            //     const lang = await getLanguages()
            //     const langStringify = JSON.stringify(lang)
            //     setLanguages(lang)
            //     localStorage.setItem('currLang', langStringify)
            // }
            // else {
            //     const lang = localStorage.getItem('currLang')
            //     setLanguages(JSON.parse(lang))
            // }

            const lang = await getLanguages(1)
            setLanguages(lang)
        })()
    }, [])

    return <LanguagesContext.Provider value={{
        languages,
        setLanguages,
    }}>
        {props.children}    
    </LanguagesContext.Provider>
};

