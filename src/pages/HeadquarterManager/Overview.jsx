import { IonContent, IonPage } from "@ionic/react"
import { Avatar, Input, List } from "antd"
import React, { useEffect, useState, useContext } from "react";
import { getAllEntities } from "../../APIs/BranchesProvider";
import { BranchIcon, CityIcon, PieIcon, RegionIcon } from '../../Globals/Consts'
import { LanguagesContext } from "../../Store/LanguagesContext";
import { HeaderContext } from "../../Store/HeaderContext";
import { primaryThemeColorLight, primaryThemeCoor } from "../../Globals/Themes";

function Overview(props) {
    const languagesContext = useContext(LanguagesContext)

    const headerContext = useContext(HeaderContext);
    headerContext.setTitle(props.title)

    const [allBranches, setAllBranches] = useState(null)
    const [results, setResults] = useState([])

    useEffect(() => {
        (async () => {
            const branches = await getAllEntities()
            setAllBranches(branches)
        })()
    }, [])


    function findBranchHandler(e) {        
        const value = e.target.value

        if(value.length < 3) {
            setResults([])
            return
        }

        const match = allBranches.filter( b => b.name.startsWith(value))
        setResults(match)
    }


    function getAvatar(type){
        if(type == 'branch') {
            return BranchIcon
        }
        if( type == 'region') {
            return RegionIcon
        }
        if (type === 'city') {
            return CityIcon
        }
    }

    function entityClickedHandler(id) {
        console.log(`${id} clicked`)
    }

    return (
        <div>

            <div>
                
                <div style={{margin: '15px'}}>
                    <Input style={{direction: languagesContext.languages.flow, borderColor: primaryThemeColorLight}}  placeholder={languagesContext.languages.translations.overViewFindEntityPlaceHolder} onChange={findBranchHandler}/>
                </div>

                <div style={{margin: '10px'}}>
                    {results && <List itemLayout="horizontal"
                                      style={{direction: languagesContext.languages.flow}}
                                      dataSource={results}
                                      locale={{emptyText: 
                                        <div >
                                            {/* <GiSoccerField style={{fontSize: '78px', color: 'white'}}/> <br></br> */}
                                            <label style={{color: primaryThemeColorLight}}>No Data Found</label>
                                        </div>
                                    }}
                                      renderItem={(item, index) =>{
                                            return <List.Item style={{padding: '4px'}} onClick={()=>{entityClickedHandler(item.id)}}>
                                                        <List.Item.Meta
                                                            avatar={<Avatar style={{marginTop: '4px', fontSize: '26px', color: primaryThemeCoor, background: 'transparent'}} icon={getAvatar(item.type)} />}
                                                            title={<div style={{marginBottom: '-6px'}}>{item.name}</div>}
                                                            description={<div >{item.location}</div>}/>
                                                    </List.Item>}}>
                                    </List>}
                </div>

            </div>

        </div>
    )
}

export default Overview