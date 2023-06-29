import { Avatar, Card, Image, List } from "antd"
import Meta from "antd/es/card/Meta"
import { useEffect, useState, useContext} from "react"
import { useLocation, useParams } from "react-router";
import { IonApp, IonContent, IonPage, NavContext, useIonViewDidEnter, useIonViewDidLeave, useIonViewWillEnter } from "@ionic/react";
import { getWarehouses } from "../../APIs/WarehouseProvider";
import { WarehouseIcon } from "../../Globals/Consts";
import { LanguagesContext } from "../../Store/LanguagesContext";
import { HeaderContext } from "../../Store/HeaderContext";

import { useHistory } from "react-router";
import { primaryThemeCoor } from "../../Globals/Themes";

function Warehouse(props) {
    const languagesContext = useContext(LanguagesContext)
    const {navigate} = useContext(NavContext)
    const history = useHistory();
    const [warehouses, setWarehouses] = useState(null)
    let { branchId } = useParams();

    const headerContext = useContext(HeaderContext);
    const location = useLocation();
    // useIonViewDidLeave( ()=> {
    //     setWarehouses(null)
    // })

    console.log('enter')
    
    useEffect(() => {
        (async () => {
            if(!warehouses) {
                console.log('set title')
                headerContext.setTitle(props.title)
                const warehousesFromServer = await getWarehouses(branchId)
                setWarehouses(warehousesFromServer )
            }
        })()
    }, [warehouses])

    useEffect( () =>{
        console.log('rendered')
    }, [])

    function entityClickedHandler(id) {
        console.log('clicked', id)
        navigate(`/WarehouseProducts/${id}`)
    }

    // Call the API when the component mounts
    useEffect(() => {
      console.log('rendered2')
    }, []);

    return (
         <div style={{margin: '10px'}}>
             <div>
                <div style={{margin: '10px'}}>
                        {warehouses && <List itemLayout="horizontal"
                                        style={{direction: languagesContext.languages.flow}}
                                        dataSource={warehouses}
                                        renderItem={(item, index) =>{
                                                return <List.Item style={{padding: '4px'}} onClick={()=>{entityClickedHandler(item.id)}}>
                                                            <List.Item.Meta
                                                                avatar={<Avatar style={{marginTop: '4px', fontSize: '26px', color: primaryThemeCoor, background: 'transparent'}} icon={WarehouseIcon} />}
                                                                title={<div style={{marginBottom: '-6px'}}>{item.name}</div>}
                                                                description={item.address}/>
                                                        </List.Item>}}>
                                        </List>}
                </div>
              </div>
          </div>
     )
}


export default Warehouse

//  const Warehouse = () => {
//     const history = useHistory();
  
//     // API call function
//     const makeApiCall = () => {
//       // Make the API call using Fetch API
//       console.log('fetch')
//     };
  
//     // Call the API when the component mounts
//     useEffect(() => {
//       makeApiCall();
//     }, []);
  
//     return (
//       <div>
//         {/* Your component JSX */}
//       </div>
//     );
//   };

// export default Warehouse