import { IonButton } from "@ionic/react";
import React, { useEffect, useState } from "react";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { Router } from "react-router";


function RegionsTreeList(props) {

    const [isExpanded, setExpanded] = useState(true)    
    const root = props.root
    
    return (
        <div >
            <div style={{marginLeft: '10px', marginTop: '15px'}}>
                <div style={{display: 'flex'}}>
                    {isExpanded && root.cities && <AiOutlineMinusSquare onClick={()=>{ setExpanded(!isExpanded)  }}/>}
                    {!isExpanded && root.cities && <AiOutlinePlusSquare onClick={()=>{ setExpanded(!isExpanded)  }}/>}
                    <div style={{marginLeft: '10px', marginTop: '-2px'}}>{root.region}</div>
                </div>
                {root.cities && isExpanded && root.cities.map( (i, _index) => {
                    return <CitiesTreeList referTo={props.referTo} fontSize={props.fontSize} root={i} key={_index}/>
                } )}
            </div>    
        </div>
    )


}


function CitiesTreeList(props) {
    const [isExpanded, setExpanded] = useState(true)    
    const root = props.root
    return (
        <div >
            <div style={{marginLeft: '25px', marginTop: '10px'}}>
                <div style={{display: 'flex'}}>
                    {isExpanded && root.branches && <AiOutlineMinusSquare onClick={()=>{ setExpanded(!isExpanded)  }}/>}
                    {!isExpanded && root.branches && <AiOutlinePlusSquare onClick={()=>{ setExpanded(!isExpanded)  }}/>}
                    <div style={{marginLeft: '10px', marginTop: '-2px'}}>{root.name}</div>
                </div>
                {root.branches && isExpanded && root.branches.map( (i, _index) => {
                    return <BarnchesTreeList referTo={props.referTo} fontSize={props.fontSize}  root={i} key={_index}/>
                } )}
            </div>    
        </div>
    )
}

function BarnchesTreeList(props) {
    const [isExpanded, setExpanded] = useState(true)    
    const root = props.root
    
    const href = `/${props.referTo.href}/${root._id}`
    return (
        <div >
            <div style={{marginLeft: '10px'}}>
                <IonButton fill="clear" tab={props.referTo.tab} href={href} >{root.location}</IonButton>
            </div>    
        </div>
    )
}



export default RegionsTreeList