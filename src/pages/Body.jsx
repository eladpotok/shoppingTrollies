import { IonApp, IonHeader, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router";
import Tab1 from "./Tab1";
import Home from "./HeadquarterManager/Home";
import Tab3 from "./Tab3";
import { cart, hammer, home } from "ionicons/icons";
import Header from "./Header";
import Profile from "./Profile";
import ProductStats from "./ProductStats";


function Body(props) {


    return (
        
            <IonTabs>
                <IonRouterOutlet>
                    <Route exact path="/tab1">
                        <Tab1 />
                    </Route>
                    <Route exact path="/HeadquarterManager/home">
                        <Home />
                    </Route>
                    <Route exact path="/tab3">
                        <Tab3 />
                    </Route>
                    <Route exact path="/profile">
                        <Profile onLogout={props.onLogout}/>
                    </Route>
                    <Route exact path="/productsStats/:branchId">
                        <ProductStats/>
                    </Route>
                    <Route exact path="/">
                        <Redirect to="/HeadquarterManager/home" />
                    </Route>
                </IonRouterOutlet>

                <IonTabBar slot="bottom">
                    <IonTabButton tab="tab1" href="/tab1">
                        <IonIcon aria-hidden="true" icon={hammer} />
                        <IonLabel>Fix</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="home" href="/HeadquarterManager/home">
                        <IonIcon aria-hidden="true" icon={home} />
                        <IonLabel>Home</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="tab3" href="/tab3">
                        <IonIcon aria-hidden="true" icon={cart} />
                        <IonLabel>Orders</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>

    )


}


export default Body