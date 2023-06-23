import { useContext } from "react"
import { UserContext } from "../Store/UserContext"
import { GrLanguage, GrLogout } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { ff_hasConfig } from "../Globals/FeatureFlags";
import { headerBackground } from "../Globals/Themes";
import { person } from "ionicons/icons";
import {NavContext} from '@ionic/react';
import { Button } from "antd";



function Header(props) {

    const {navigate} = useContext(NavContext);
    const {goBack} = useContext(NavContext)

    function profileClickedHandler(e) {
        navigate('/profile')
    }

    function backClickedHandler() {
        goBack()
    }

    return (
        <div style={{background: headerBackground}}>
            
            <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '24px'}}>
                <div>
                    <IoIosArrowBack style={{marginLeft: '5px', marginTop: '5px'}} onClick={backClickedHandler}/>
                </div>
                <div >
                    {ff_hasConfig && <GiHamburgerMenu style={{color: 'blue', marginLeft: '15px'}}/>}
                    <label style={{marginLeft: '15px'}}>YOUR APP NAME</label>
                </div>
                <div style={{marginRight: '15px', marginTop: '5px'}}>
                    <CgProfile onClick={profileClickedHandler}/>
                    <GrLanguage style={{marginLeft: '5px'}}/>
                </div>
            </div>
        </div>
    )

}

export default Header