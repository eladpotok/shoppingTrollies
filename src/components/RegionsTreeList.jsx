import { IonButton } from "@ionic/react";
import React, { useEffect, useState } from "react";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { Router } from "react-router";
import { CityIcon, RegionIcon } from "../Globals/Consts";
import { listDividerColor, listItemClickableColor, listItemNameColor, primaryThemeColorLight, primaryThemeCoor } from "../Globals/Themes";


function RegionsTreeList(props) {

    const [isExpanded, setExpanded] = useState(true)    
    const root = props.root
    
    return (
        <div >
            <div style={{marginTop: '15px'}}>
                <div style={{display: 'flex', borderBottom: '1px solid' , borderColor: listDividerColor, paddingBottom: '5px'}}>
                    {isExpanded && root.cities && <IoMdArrowDropdown onClick={()=>{ setExpanded(!isExpanded)  }}/>}
                    {!isExpanded && root.cities && <IoMdArrowDropright onClick={()=>{ setExpanded(!isExpanded)  }}/>}
                    <div style={{marginLeft: '5px', color: primaryThemeCoor}}>{RegionIcon} </div> <div style={{marginLeft: '10px', marginTop: '-2px', color: primaryThemeColorLight}}>{root.region}</div>
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
            <div style={{ marginTop: '10px'}}>
                <div style={{paddingLeft: '25px', display: 'flex', borderBottom: '1px solid', borderColor: listDividerColor, paddingBottom: '5px'}}>
                    {isExpanded && root.branches && <IoMdArrowDropdown onClick={()=>{ setExpanded(!isExpanded)  }}/>}
                    {!isExpanded && root.branches && <IoMdArrowDropright onClick={()=>{ setExpanded(!isExpanded)  }}/>}
                    <div style={{marginLeft: '5px', color: primaryThemeCoor}}>{CityIcon}</div><div style={{marginLeft: '10px', marginTop: '-2px', color: primaryThemeColorLight}}>{root.name}</div>
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
        <div style={{borderBottom: '1px solid', borderColor: listDividerColor}}>
            <div style={{paddingLeft: '55px'}}>
                <IonButton  style={{margin: '0px', color: listItemClickableColor, fontWeight: 'bold'}} fill="clear" tab={props.referTo.tab} href={href} >{root.location}</IonButton>
            </div>    
        </div>
    )
}



export default RegionsTreeList