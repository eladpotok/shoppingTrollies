import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../Store/UserContext";
import { IonAvatar, IonButton, IonContent, IonIcon, IonPage } from '@ionic/react';
import { Button, Space } from "antd";
import { logOut, pencil } from "ionicons/icons";
import EditLabel from "../components/EditLabel";

function Profile(props) {

    const userContext = useContext(UserContext)
    const [isEditMode, setEditMode] = useState(false)

    const personalInfos = userContext.user
    
    function logoutClickedHandler() {
        props.onLogout()
    }

    function editClickedHandler() {
        setEditMode(!isEditMode)
    }
    
    return (
        <IonPage >
            <IonContent>
                <div style={{margin: '24px'}}>
                    <IonAvatar>
                        <img src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                    </IonAvatar>
                    <div style={{ display: 'flex', fontWeight: 'bold', fontSize: '26px', marginTop: '5px'}}>
                        <EditLabel isEdit={isEditMode} value={personalInfos.firstName}/>
                        &nbsp;
                        <EditLabel isEdit={isEditMode} value={personalInfos.surename}/>
                    </div>
                    <div style={{color: 'grey', marginTop: '5px'}}><EditLabel isEdit={isEditMode} value={personalInfos.mail}/></div>
                    <div style={{color: 'grey', marginTop: '5px'}}>{personalInfos.roleId}</div>
                </div>

                <div style={{marginRight: '14px'}}>
                    <IonButton onClick={logoutClickedHandler}>
                        <IonIcon style={{color: "white"}} aria-hidden="true" icon={logOut} />
                    </IonButton>
                    <IonButton onClick={editClickedHandler}>
                        <IonIcon style={{color: "white"}} aria-hidden="true" icon={pencil} />
                    </IonButton>
                </div>
            </IonContent>
        </IonPage>
    )

}

export default Profile