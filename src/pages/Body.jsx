import { IonApp, IonHeader, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router";
import BranchesProductsStatus from "./HeadquarterManager/BranchesProductsStatus";
import BranchesMainPage from "./BranchesMainPage";
import { cart, cube, hammer, home, language, search, storefront } from "ionicons/icons";
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


function Body(props) {

    const languagesContext = useContext(LanguagesContext)
    const dic = languagesContext.languages.translations
    
    return (
        
        <IonTabs>
            <IonRouterOutlet>
                <Route exact path="/HeadquarterManager/BranchesProductsStatus">
                    <BranchesProductsStatus />
                </Route>
                <Route exact path="/WarehouseProducts/:warehosueId">
                    <WarehouseProducts />
                </Route>
                <Route exact path="/branches">
                    <BranchesMainPage roleId={props.roleId}/>
                </Route>
                <Route exact path="/HeadquarterManager/orders">
                    <Orders />
                </Route>
                <Route exact path="/profile">
                    <Profile onLogout={props.onLogout}/>
                </Route>
                <Route exact path="/productsStats/:branchId">
                    <ProductStats/>
                </Route>
                <Route exact path="/HeadquarterManager/overview">
                    <Overview/>
                </Route>
                <Route exact path="/HeadquarterManager/warehouse">
                    <Warehouse/>
                </Route>
                <Route exact path="/">
                    <Redirect to="/branches" />
                </Route>
            </IonRouterOutlet>

            <IonTabBar slot="bottom">
                <IonTabButton tab="branches" href="/branches">
                    <IonIcon aria-hidden="true" icon={storefront} />
                    <IonLabel>Branches</IonLabel>
                </IonTabButton>
                { props.roleId == ROLES.HeadquarterManager && <IonTabButton tab="overview" href="/HeadquarterManager/overview">
                    <IonIcon aria-hidden="true" icon={search} />
                    <IonLabel>{dic['homeTab']}</IonLabel>
                </IonTabButton>}
                {props.roleId == ROLES.HeadquarterManager && <IonTabButton tab="orders" href="/HeadquarterManager/orders">
                    <IonIcon aria-hidden="true" icon={cart} />
                    <IonLabel>Orders</IonLabel>
                </IonTabButton>}
                {props.roleId == ROLES.HeadquarterManager && <IonTabButton tab="warehouse" href="/HeadquarterManager/warehouse">
                    <IonIcon aria-hidden="true" icon={cube} />
                    <IonLabel>Warehouse</IonLabel>
                </IonTabButton>}
            </IonTabBar>
        </IonTabs>

    )


}


export default Body