import { Card, Image } from "antd"
import Meta from "antd/es/card/Meta"
import { useEffect, useState} from "react"
import { useLocation, useParams } from "react-router";
import { IonContent, IonPage, NavContext, useIonViewDidEnter, useIonViewDidLeave, useIonViewWillEnter } from "@ionic/react";
import { getWarehouseProducts } from "../APIs/WarehouseProvider";
import { listDividerColor, primaryThemeColorLight, primaryThemeCoor as primaryThemeColor } from "../Globals/Themes";

function WarehouseProducts(props) {
    const location = useLocation();

    const [warehouseProducts, setWarehouseProducts] = useState(null)
    let { warehosueId } = useParams();
    
    // useIonViewDidLeave( () => {
    //     setWarehouseProducts(null)
    // })

    // useIonViewWillEnter( async ()=> {
    //     const products = await getWarehouseProducts(warehosueId)
    //     setWarehouseProducts(products )
    // })

    useEffect(() => {
        (async () => {
            
           if(!warehouseProducts) {
                console.log('read products from server')
                const products = await getWarehouseProducts(warehosueId)
                setWarehouseProducts(products )
           }
        })()
    }, [warehouseProducts])

    // useEffect(async () => {
    //     // Reset state when component mounts
    //                  const products = await getWarehouseProducts(warehosueId)
    //              setWarehouseProducts(products )
    
    //     // Clean up the state when component unmounts (optional)
        
    //   }, []); // Empty dependency array ensures this effect runs only once
    
    //   const resetState = () => {
    //     setWarehouseProducts(null)
    //   };
    

    return (
        <IonContent >
            <div style={{margin: '20px'}}>
                {warehouseProducts && warehouseProducts.exists.map( storage => {  return  <Card style={{marginTop: '10px'}} cover={<div style={{background: listDividerColor, borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}><Image style={{marginLeft: '50%'}} height={155} width={155} src={storage.imageUrl}/></div>}>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <Meta title={<div style={{color: primaryThemeColor}}>{storage.title}</div>} description={<div style={{color: primaryThemeColorLight}}>{storage.description}</div>} />
                            <div style={{fontSize: '30px', color: primaryThemeColor, fontWeight: 'bold'}}>{storage.amount}</div>
                        </div>
                 </Card> })}
            </div>
        </IonContent>
    )
}


export default WarehouseProducts