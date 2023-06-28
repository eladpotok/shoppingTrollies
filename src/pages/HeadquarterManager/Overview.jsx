import { IonContent, IonPage } from "@ionic/react"
import { Avatar, Input, List } from "antd"
import React, { useEffect, useState, useContext } from "react";
import { getAllEntities } from "../../APIs/BranchesProvider";
import { BranchIcon, CityIcon, PieIcon, RegionIcon } from '../../Globals/Consts'
import { LanguagesContext } from "../../Store/LanguagesContext";

function Overview(props) {
    const languagesContext = useContext(LanguagesContext)

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
        <IonPage>

            <IonContent>
                
                <div style={{margin: '15px'}}>
                    <Input style={{direction: languagesContext.languages.flow}}  placeholder={languagesContext.languages.translations.overViewFindEntityPlaceHolder} onChange={findBranchHandler}/>
                </div>

                <div style={{margin: '10px'}}>
                    {results && <List itemLayout="horizontal"
                                      style={{direction: languagesContext.languages.flow}}
                                      dataSource={results}
                                      renderItem={(item, index) =>{
                                            return <List.Item onClick={()=>{entityClickedHandler(item.id)}}>
                                                        <List.Item.Meta
                                                            avatar={<Avatar icon={getAvatar(item.type)} />}
                                                            title={item.name}
                                                            description={item.location}/>
                                                    </List.Item>}}>
                                    </List>}
                </div>

            </IonContent>

        </IonPage>
    )
}

export default Overview