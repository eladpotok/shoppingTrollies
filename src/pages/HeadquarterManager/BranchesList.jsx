import React, { useEffect, useState, useContext } from "react";

import { IonContent, IonHeader, IonIcon, IonItem, IonList, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import { getBranches } from "../../APIs/BranchesProvider";
import { statsChart, storefront } from "ionicons/icons";
import { displayFontColor, mainBackground } from "../../Globals/Themes";
import RegionsTreeList from "../../components/RegionsTreeList";
import { LanguagesContext } from "../../Store/LanguagesContext";
import { HeaderContext } from "../../Store/HeaderContext";


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
    <div>
      <div>
        <div>
            {regions && regions.data.map( region => { 
              return <RegionsTreeList referTo={referTo} fontSize='24px' root={region}/>
            })}
        </div>
      </div>
    </div>
  );


}


export default BranchesList