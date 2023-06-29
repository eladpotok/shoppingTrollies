import React, { useContext } from "react";

import BranchesList from "./BranchesList";
import { HeaderContext } from "../../Store/HeaderContext";
import { IonContent } from "@ionic/react";

function BranchesProductsStatus(props) {
  const headerContext = useContext(HeaderContext)

  const referTo= {tab: "productsStats", href: 'productsStats'}

  headerContext.setTitle(props.title)

  return (
      <IonContent>
        <BranchesList referTo={referTo}/>
      </IonContent>
  );
};

export default BranchesProductsStatus;
