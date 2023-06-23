import { useContext } from "react";
import { LanguagesContext } from "../Store/LanguagesContext";
import UserLogin from "./UserLogin";
import MainMenu from "./MainMenu";
import { UserContext } from "../Store/UserContext";
import { login } from "../APIs/UserProvider";
import { mainBackground } from "../Globals/Themes";

function Main(props) {

    const langsContext = useContext(LanguagesContext)
    const userContext = useContext(UserContext)

 
    if (!langsContext.languages) {
        return <div>no languages</div>
    }

    async function loginHandler(mail, password) {
        const loginValue = await login(mail, password)
        if (!loginValue) {
            console.log('login failed')
            return
        }

        userContext.setUser(loginValue)
    }

    function logoutHandler() {
        console.log('logout')
        userContext.setUser(null)
    }

    return (
     <div> 
        { !userContext.user && <div>
            <UserLogin onLogin={loginHandler} langs={langsContext.languages}/>
        </div>}

        { userContext.user && <div>
            <MainMenu onLogout={logoutHandler}/>
        </div>}
     </div>
    )
}


export default Main;