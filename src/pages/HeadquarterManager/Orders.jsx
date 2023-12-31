import React, { useEffect, useState, useContext } from "react";
import { IonContent, IonPage } from "@ionic/react"
import { getMissingTrollies } from "../../APIs/TrolleiesProvider"
import { Card, Image } from "antd"
import Meta from "antd/es/card/Meta";
import { HeaderContext } from "../../Store/HeaderContext";

function Orders(props) {
    const headerContext = useContext(HeaderContext);
    headerContext.setTitle(props.title)
    const [branches, setBranches] = useState(null)

    useEffect(() => {
        (async () => {
            const missingTrolliesPerBranch = await getMissingTrollies()
            setBranches(missingTrolliesPerBranch)
        })()
    }, [])

    return (
        <div>
            <div>
                {branches && branches.map( branch => {
                    return  <Card style={{marginTop: '10px'}} cover={<div style={{background:'grey', borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}><Image style={{marginLeft: '50%'}} height={155} width={155} src={branch.imageUrl}/></div>}>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <Meta title={branch.title}  />
                        {/* <div style={{fontSize: '30px', fontWeight: 'bold'}}>{storage.amount}</div> */}
                    </div>
             </Card> })}
            </div>
        </div>

    )

}


export default Orders;