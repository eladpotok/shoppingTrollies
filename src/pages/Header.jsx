import { useContext, useEffect, useState } from "react"
import { UserContext } from "../Store/UserContext"
import { GrLanguage, GrLogout } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { ff_hasConfig } from "../Globals/FeatureFlags";
import { headerBackground, secondaryTitleColor } from "../Globals/Themes";
import { person } from "ionicons/icons";
import {NavContext} from '@ionic/react';
import { Button, Dropdown } from "antd";

import { IoLanguageOutline } from "react-icons/io5";
import { getAvailableLanguages, getLanguages } from "../APIs/LanguagesProvider";
import { LanguagesContext } from "../Store/LanguagesContext";
import { MdLanguage } from "react-icons/md";

function Header(props) {

    const languagesContext = useContext(LanguagesContext)
    const [languages, setLanguages] = useState(null)

    useEffect(() => {
        (async () => {
            const availableLanguages = await getAvailableLanguages()
            
            const items = []
            availableLanguages.forEach( l => {
                items.push(
                    {
                        label: <div  onClick={async ()=>{await languageSelectedHandler(l.id)}}>{l.display}</div>,
                        key: l.id,
                        icon: <IoLanguageOutline />
                    }
                )
            })
            setLanguages(items)
        })()
    }, [])


    async function languageSelectedHandler(id) {
        const languageDictionary = await getLanguages(id)
        languagesContext.setLanguages(languageDictionary)
    }

    const {navigate} = useContext(NavContext);
    const {goBack} = useContext(NavContext)

    function profileClickedHandler(e) {
        navigate('/profile')
    }

    function backClickedHandler() {
        // goBack()
    }

    return (
        <div style={{ color: secondaryTitleColor}}>
            
            <div style={{background: headerBackground, display: 'flex', justifyContent: 'space-between', fontSize: '24px', border: '1px solid black', borderRadius: '10px'}}>
                <div>
                    <IoIosArrowBack style={{marginLeft: '5px', marginTop: '5px'}} onClick={backClickedHandler}/>
                </div>
                <div style={{marginTop: '2px'}}>
                    {ff_hasConfig && <GiHamburgerMenu style={{color: 'blue', marginLeft: '15px'}}/>}
                    <label style={{marginLeft: '15px'}}>YOUR APP NAME</label>
                </div>
                <div style={{marginRight: '15px', marginTop: '5px'}}>
                    <CgProfile onClick={profileClickedHandler}/>
                    {languages && <Dropdown menu={{  items: languages }} placement="bottomLeft" arrow trigger={['click']}>
                        <MdLanguage style={{marginLeft: '5px'}}/>
                    </Dropdown>}
                </div>
            </div>
        </div>
    )

}

export default Header