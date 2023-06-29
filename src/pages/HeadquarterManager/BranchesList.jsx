import React, { useEffect, useState } from "react";

import { IonContent, IonHeader, IonIcon, IonItem, IonList, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import { getBranches } from "../../APIs/BranchesProvider";
import { statsChart, storefront } from "ionicons/icons";
import { displayFontColor, mainBackground } from "../../Globals/Themes";
import RegionsTreeList from "../../components/RegionsTreeList";


function BranchesList(props) {
    const [regions, setRegions]  = useState(null)

    const referTo = props.referTo

    useEffect(() => {
      (async () => {
        if(!regions) {
          const regions = await getBranches()
          setRegions(regions)
        }
      })()
  }, [regions])



  return (
    <IonPage>
      <IonContent>
        <div>
            <div style={{fontSize: '18px', marginLeft: '10px', display: 'flex', justifyContent: 'center'}}>
              <div style={{background: 'rgba(255,255,255,0.5)', paddingLeft: '40px', paddingRight: '40px'}}>List of Stores</div>
            </div>
            {regions && regions.data.map( region => { 
              return <RegionsTreeList referTo={referTo} fontSize='24px' root={region}/>
            })}
        </div>
      </IonContent>
    </IonPage>
  );


}


export default BranchesList