
import { IonButton } from "@ionic/react";
import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { AiOutlinePlusSquare, AiOutlineMinusSquare} from "react-icons/ai";

function TreeView(props){

    const [isExpanded, setExpanded] = useState(true)
    const root = props.root

    function treeViewNodeClickedHandler(id) {
        props.onClicked(id)
    }
    
    return (
        <div >
            <div style={{marginLeft: '15px'}}>
                {isExpanded && root.items && <AiOutlineMinusSquare onClick={()=>{ setExpanded(!isExpanded)  }}/>}
                {!isExpanded && root.items && <AiOutlinePlusSquare onClick={()=>{ setExpanded(!isExpanded)  }}/>}
                {/* <Button style={{fontSize: props.fontSize ?? '14px'}} type='link' onClick={()=>{treeViewNodeClickedHandler(root.id)}}>{root.name}</Button> */}
                <IonButton fill="clear" tab="productsStats" href="/profile" onClick={()=>{treeViewNodeClickedHandler(root.id)}}>{root.name}</IonButton>
                {root.items && isExpanded && root.items.map( (i, _index) => {
                    return <TreeView fontSize={props.fontSize} onClicked={props.onClicked} root={i} key={_index}/>
                } )}
            </div>    
        </div>
    )

}


export default TreeView