import React, { useEffect,useState,useContext } from "react";
import { Button, Card } from "antd"
import ProductPieChart from "../components/ProductPieChart"
import { useParams } from "react-router";
import { getTrolliesById } from "../APIs/TrolleiesProvider";
import { getBranchById } from "../APIs/BranchesProvider";
import {IonContent, IonPage, NavContext} from '@ionic/react';
import { HeaderContext } from "../Store/HeaderContext";

function ProductStats(props) {

    const capacity = props.capacity
    let { branchId } = useParams();

    const [branchTrollies, setBranchTrollies] = useState(null)
    const [branchInfo, setBranchInfo] = useState(null)
    const {navigate} = useContext(NavContext);

    const headerContext = useContext(HeaderContext);
    headerContext.setTitle(props.title)

    useEffect(() => {
        (async () => {
            const trolleisInBranch = await getTrolliesById(branchId)
            setBranchTrollies(trolleisInBranch )

            const branchInfoFromServer = await getBranchById(branchId)
            setBranchInfo(branchInfoFromServer)
        })()
    }, [])

    return (
        <div>
            <div>
                {branchInfo && <Card title='Branch Information' style={{margin: '15px'}}>
                    <div >
                        <div><b>Region:</b> {branchInfo.region}</div>
                        <div><b>Name:</b> {branchInfo.name}</div>
                        <div><b>Location:</b> {branchInfo.location}</div>
                    </div>
                </Card>}
                {branchTrollies &&  branchTrollies.capacity.map( tro => {
                    return <Card key={tro.key} title='<ENTER TROLLEY TYPE>' style={{margin: '15px'}}>
                        <ProductPieChart key={tro.key} items={tro}/>
                    </Card>
                })}
            </div>
        </div>
    )

}


export default ProductStats