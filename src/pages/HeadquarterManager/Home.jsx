import React, { useEffect, useState } from "react";

import { IonContent, IonHeader, IonIcon, IonItem, IonList, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import ProductPieChart from '../../components/ProductPieChart';
import { getTrollies } from '../../APIs/TrolleiesProvider';
import TreeView from "../../components/TreeView";
import { getBranches } from "../../APIs/BranchesProvider";
import { Button } from "antd";
import { useHistory } from 'react-router';
import { statsChart, storefront } from "ionicons/icons";
import { displayFontColor, mainBackground } from "../../Globals/Themes";
import ProductStats from "../ProductStats";
import RegionsTreeList from "../../components/RegionsTreeList";

function Home(props) {

    const [trollies, setTrollies ] = useState([])
    const [regions, setRegions]  = useState(null)
    const [selectedRegion, setSelectedRegion] = useState(null)
    const history = useHistory();

    useEffect(() => {
        (async () => {
            const trollies = await getTrollies()
            setTrollies(trollies)
        })()
    }, [])

    useEffect(() => {
      (async () => {
        if(!regions) {
          const regions = await getBranches()
          setRegions(regions)
        }
      })()
  }, [regions])


  function treeNodeClickedHandler(id) {
    const capacityInRegion = trollies.filter( t => t.regionId == id)
    if(!capacityInRegion || capacityInRegion.length == 0) {
      setSelectedRegion(null)  
      return
    }
    setSelectedRegion(capacityInRegion[0])
  }

  return (
    <IonPage style={{backgroundColor: mainBackground}}>
      <IonContent>
        <div style={{margin: '10px' }}>
            <div style={{fontSize: '18px', marginLeft: '10px', display: 'flex'}}>
              <IonIcon aria-hidden="true" icon={storefront} style={{color: displayFontColor, marginTop: '2px'}} />
              <div style={{marginLeft: '10px', 'border-bottom': '1px solid', borderColor: displayFontColor}}>List of Stores</div>
            </div>
            {regions && regions.data.map( region => { 
              return <RegionsTreeList fontSize='24px' onClicked={treeNodeClickedHandler} root={region}/>
            })}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
