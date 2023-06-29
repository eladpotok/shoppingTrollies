import { IonApp, IonHeader, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route, useLocation } from "react-router";
import BranchesProductsStatus from "./HeadquarterManager/BranchesProductsStatus";
import BranchesMainPage from "./BranchesMainPage";
import { cart, cartOutline, cube, cubeOutline, hammer, home, language, search, searchCircleOutline, searchOutline, storefront, storefrontOutline } from "ionicons/icons";
import Header from "./Header";
import Profile from "./Profile";
import ProductStats from "./ProductStats";
import { ROLES } from "../Globals/Consts";
import Overview from "./HeadquarterManager/Overview";
import { useContext } from "react";
import { LanguagesContext } from "../Store/LanguagesContext";
import Warehouse from "./HeadquarterManager/Warehouse";
import BranchStorage from "./WarehouseProducts";
import Orders from "./HeadquarterManager/Orders";
import WarehouseProducts from "./WarehouseProducts";
import './Body.css'

function Body(props) {

    const location = useLocation();

    const languagesContext = useContext(LanguagesContext)
    const dic = languagesContext.languages.translations
    
    return (
        
        <IonTabs>
            <IonRouterOutlet>
                <Route exact path="/HeadquarterManager/BranchesProductsStatus">
                    <BranchesProductsStatus title={dic["branchesTab"]}/>
                </Route>
                <Route exact path="/WarehouseProducts/:warehosueId">
                    <WarehouseProducts />
                </Route>
                <Route exact path="/branches">
                    <BranchesMainPage  roleId={props.roleId}/>
                </Route>
                <Route exact path="/HeadquarterManager/orders">
                    <Orders title={dic["ordersTab"]} />
                </Route>
                <Route exact path="/profile">
                    <Profile title={dic["profileTitle"]} onLogout={props.onLogout}/>
                </Route>
                <Route exact path="/productsStats/:branchId">
                    <ProductStats title={dic["productsTitle"]}/>
                </Route>
                <Route exact path="/HeadquarterManager/overview">
                    <Overview title={dic["findTab"]}/>
                </Route>
                <Route key={location.state?.key} exact path="/HeadquarterManager/warehouse">
                    <Warehouse title={dic["warehouseTab"]}/>
                </Route>
                <Route exact path="/">
                    <Redirect to="/branches" />
                </Route>
            </IonRouterOutlet>

            <IonTabBar slot="top"  >
                <IonTabButton tab="branches" href="/branches" >
                    <IonIcon aria-hidden="true" icon={storefrontOutline} />
                    {/* <IonLabel>Branches</IonLabel> */}
                </IonTabButton>
                { props.roleId == ROLES.HeadquarterManager && <IonTabButton  tab="overview" href="/HeadquarterManager/overview">
                    <IonIcon aria-hidden="true" icon={searchOutline} />
                    {/* <IonLabel>{dic['homeTab']}</IonLabel> */}
                </IonTabButton>}
                {props.roleId == ROLES.HeadquarterManager && <IonTabButton tab="orders" href="/HeadquarterManager/orders">
                    <IonIcon aria-hidden="true" icon={cartOutline} />
                    {/* <IonLabel>Orders</IonLabel> */}
                </IonTabButton>}
                {props.roleId == ROLES.HeadquarterManager && <IonTabButton tab="warehouse" href="/HeadquarterManager/warehouse">
                    <IonIcon aria-hidden="true" icon={cubeOutline} />
                    {/* <IonLabel>Warehouse</IonLabel> */}
                </IonTabButton>}
            </IonTabBar>
        </IonTabs>

    )


}


export default Body