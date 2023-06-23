import React, { useEffect, useState, useContext } from "react";

import { IonButton, IonIcon } from "@ionic/react"
import { Input } from "antd"
import { checkmark, hammer } from "ionicons/icons"

function EditLabel(props) {

    const [edittedValue, setEdittedValue] = useState(null)

    function inputValueChangedHandler(changedValue) {
        setEdittedValue(changedValue)
    }

    function editDoneHandler() {
        props.onEditDone(changedValue)
    }

    return (
        
        <div>

            {props.isEdit && 
                <div style={{display: 'flex'}}>
                    <Input onChange={(e)=> { inputValueChangedHandler(e.target.value)} } value={props.value}/>
                    <IonButton onClick={editDoneHandler}>
                        <IonIcon aria-hidden="true" icon={checkmark} />
                    </IonButton>
                </div>}
            {!props.isEdit && <label>{props.value}</label>}

        </div>
        
        

    )

}


export default EditLabel