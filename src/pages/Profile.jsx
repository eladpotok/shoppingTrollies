import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../Store/UserContext";
import { IonAvatar, IonButton, IonContent, IonIcon, IonPage } from '@ionic/react';
import { Avatar, Button, Space } from "antd";
import { logOut, pencil } from "ionicons/icons";
import EditLabel from "../components/EditLabel";
import { UserOutlined } from '@ant-design/icons';
import { getRoleNameByRoleId } from "../Globals/Utilities";
import { lightTextColor, logoutButtonColor, secondaryTitleColor } from "../Globals/Themes";
import { LanguagesContext } from "../Store/LanguagesContext";
import { AiFillEdit, AiOutlineMail } from "react-icons/ai";
import { MdPassword, MdAccountBox, MdLanguage } from "react-icons/md";
import { HeaderContext } from "../Store/HeaderContext";

function Profile(props) {

    const userContext = useContext(UserContext)
    const languagesContext = useContext(LanguagesContext)
    const [isEditMode, setEditMode] = useState(false)

    const headerContext = useContext(HeaderContext);
    headerContext.setTitle(props.title)


    const personalInfos = userContext.user
    
    function logoutClickedHandler() {
        props.onLogout()
    }

    function editClickedHandler() {
        setEditMode(!isEditMode)
    }

    function getRoleName() {
        const roleName = getRoleNameByRoleId(personalInfos.roleId)
        return roleName
    }

    return (
        <div >
            <div>
                <div style={{margin: '24px'}}>

                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Avatar shape="circle" size={64} icon={<UserOutlined />} style={{marginRight: '10px'}}/> 
                        <AiFillEdit style={{alignSelf: 'flex-end'}} onClick={editClickedHandler}/>
                    </div>

                    <div style={{justifyContent: 'center', display: 'flex', fontSize: '30px', fontWeight: 'bold', marginTop: '10px'}}>
                        <EditLabel isEdit={isEditMode} value={personalInfos.firstName}/>
                        &nbsp;
                        <EditLabel isEdit={isEditMode} value={personalInfos.surename}/>
                    </div>

                    <div style={{justifyContent: 'center', display: 'flex', marginTop: '10px', color: lightTextColor}}>{getRoleName()}</div>

                    <div style={{display: 'flex', marginTop: '40px', color: secondaryTitleColor}}>
                        <AiOutlineMail style={{marginRight: '10px', marginTop: '1px'}}/>
                        {languagesContext.languages.translations['emailAddressLabel']}</div>
                    <div style={{display: 'flex', marginTop: '10px', fontWeight: 'bold', marginLeft: '27px'}}><EditLabel isEdit={isEditMode} value={personalInfos.mail}/></div>

                    <div style={{display: 'flex', marginTop: '40px', color: secondaryTitleColor}}>
                        <MdPassword style={{marginRight: '10px', marginTop: '1px'}}/>
                        {languagesContext.languages.translations['passwordLabel']}
                    </div>
                    <div style={{display: 'flex', marginTop: '10px', fontWeight: 'bold', marginLeft: '27px'}}><EditLabel password isEdit={isEditMode} value={personalInfos.password}/></div>
                    

                    <div style={{display: 'flex', marginTop: '40px', color: secondaryTitleColor}}>
                        <MdAccountBox style={{marginRight: '10px', marginTop: '1px'}}/>
                        {languagesContext.languages.translations['myAccountLabel']}
                    </div>
                    <div style={{display: 'flex', marginTop: '10px', color: logoutButtonColor, marginLeft: '27px'}} onClick={logoutClickedHandler}>{languagesContext.languages.translations['logoutButtonText']}</div>
                 
                </div>

            </div>
        </div>
    )

}

export default Profile