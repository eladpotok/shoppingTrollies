import { Avatar, Card, Image, List } from "antd"
import Meta from "antd/es/card/Meta"
import { useEffect, useState, useContext} from "react"
import { useParams } from "react-router";
import { IonContent, IonPage, NavContext } from "@ionic/react";
import { getWarehouses } from "../../APIs/WarehouseProvider";
import { WarehouseIcon } from "../../Globals/Consts";
import { LanguagesContext } from "../../Store/LanguagesContext";

function Warehouse(props) {
    const languagesContext = useContext(LanguagesContext)
    const {navigate} = useContext(NavContext)

    const [warehouses, setWarehouses] = useState(null)
    let { branchId } = useParams();


    useEffect(() => {
        
        (async () => {
            const trolleisInBranch = await getWarehouses(branchId)
            setWarehouses(trolleisInBranch )
        })()
    }, [])

    function entityClickedHandler(id) {
        console.log('clicked', id)
        navigate(`/WarehouseProducts/${id}`)
    }


    return (
        <IonPage style={{margin: '10px'}}>
            <IonContent>
                <div style={{margin: '10px'}}>
                        {warehouses && <List itemLayout="horizontal"
                                        style={{direction: languagesContext.languages.flow}}
                                        dataSource={warehouses}
                                        renderItem={(item, index) =>{
                                                return <List.Item onClick={()=>{entityClickedHandler(item.id)}}>
                                                            <List.Item.Meta
                                                                avatar={<Avatar icon={WarehouseIcon} />}
                                                                title={item.name}
                                                                description={item.address}/>
                                                        </List.Item>}}>
                                        </List>}
                </div>
            </IonContent>
        </IonPage>
    )
}


export default Warehouse