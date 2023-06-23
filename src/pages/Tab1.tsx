import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import ProductPieChart from '../components/ProductPieChart';

const Tab1: React.FC = () => {
  return (
    <IonPage>
    {/* <IonHeader>
      <IonToolbar>
        <IonTitle>Tab 2</IonTitle>
      </IonToolbar>
    </IonHeader> */}
    <IonContent >
      {/* <IonHeader >
        <IonToolbar>
          <IonTitle size="large">Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      {/* <ExploreContainer name="Tab1 page" /> */}
      <div>
        
      </div>
    </IonContent>
  </IonPage>
  );
};

export default Tab1;
