import React from 'react'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonList,
  IonItem,
  IonLabel
} from '@ionic/react'
import { add } from 'ionicons/icons'

export const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Spender</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonItem>
            <IonLabel>item 1</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>item 2</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>item 3</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>item 4</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>item 5</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>item 6</IonLabel>
          </IonItem>
        </IonList>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  )
}
