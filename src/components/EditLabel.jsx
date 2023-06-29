import React, { useEffect, useState, useContext } from "react";

import { IonButton, IonIcon } from "@ionic/react"
import { Input } from "antd"
import { checkmark, hammer } from "ionicons/icons"
import { AiFillEye } from "react-icons/ai";
import { lightTextColor } from "../Globals/Themes";



function EditLabel(props) {

    const [edittedValue, setEdittedValue] = useState(props.value[props.path])
    const [passawordView, setPasswordView] = useState(true)

    function inputValueChangedHandler(changedValue) {
        setEdittedValue(changedValue)
    }

    function editDoneHandler() {
        props.value[props.path] = edittedValue
        props.onEditDone()
    }

    function getDisplayText() {
        if(props.password && passawordView) {
            return "****"
        }
        return props.value[props.path]
    }

    function eyeIconClickedHandler() {
        setPasswordView(!passawordView)
    }


    return (
        
        <div>

            {props.isEdit && 
                <div style={{display: 'flex'}}>
                    <Input style={{borderTopWidth: '0px', borderRight: '0px', borderLeft: '0px', borderRadius: '0px', padding: '0px'}} onChange={(e)=> { inputValueChangedHandler(e.target.value)} } value={edittedValue}/>
                    <IonButton onClick={editDoneHandler} color={"medium"} style={{marginLeft: '10px'}} size="small">
                        <IonIcon aria-hidden="true" icon={checkmark} />
                    </IonButton>
                </div>}
            {!props.isEdit && <label>{getDisplayText()}</label>}
            {props.password && !props.isEdit && <AiFillEye onClick={eyeIconClickedHandler} style={{verticalAlign: 'top', marginLeft: '4px', color: lightTextColor}} />}

        </div>
        
        

    )

}


export default EditLabel