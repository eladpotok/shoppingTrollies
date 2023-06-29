import React, { useContext } from "react";

import BranchesList from "./BranchesList";
import { HeaderContext } from "../../Store/HeaderContext";

function BranchesProductsStatus(props) {
  const headerContext = useContext(HeaderContext)

  const referTo= {tab: "productsStats", href: 'productsStats'}

  headerContext.setTitle(props.title)

  return (
      <BranchesList referTo={referTo}/>
  );
};

export default BranchesProductsStatus;
