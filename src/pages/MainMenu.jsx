
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import { IonReactRouter } from "@ionic/react-router";

import '../theme/variables.css';
import Body from "./Body";
import { IonApp, IonContent, IonTitle, IonToolbar } from '@ionic/react';
import Header from './Header';
import './MainMenu.css'

function MainMenu(props) {

    return (
        <IonApp className="background-div">           
             <IonReactRouter>
                <div>
                    <Header onLogout={props.onLogout}/>
                </div>
                <IonContent>
                    <Body roleId={props.roleId} onLogout={props.onLogout}/>
                </IonContent>
            </IonReactRouter>
        </IonApp>
    )

}


export default MainMenu;