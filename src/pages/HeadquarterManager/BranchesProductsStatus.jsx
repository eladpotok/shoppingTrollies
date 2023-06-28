import React, { useEffect, useState } from "react";

import { IonContent, IonHeader, IonIcon, IonItem, IonList, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
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
import BranchesList from "./BranchesList";

function BranchesProductsStatus(props) {

  const referTo= {tab: "productsStats", href: 'productsStats'}
  return (
      <BranchesList referTo={referTo}/>
  );
};

export default BranchesProductsStatus;
