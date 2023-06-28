import { navigate } from "ionicons/icons";
import { ROLES } from "../Globals/Consts";
import {NavContext} from '@ionic/react';
import { UserContext } from "../Store/UserContext";
import { useContext } from "react";

function BranchesMainPage(props) {
    const {navigate} = useContext(NavContext)
    const userContext = useContext(UserContext)
    
    if (userContext.user.roleId == ROLES.HeadquarterManager) {
        navigate('/HeadquarterManager/BranchesProductsStatus')
    }
    else {
        const branchId = userContext.user.managerBranchId
        navigate(`/productsStats/${branchId}`)
    }
    


}

export default BranchesMainPage