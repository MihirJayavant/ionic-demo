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
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonItem,
  IonLabel,
  IonButton
} from '@ionic/react'
import { add } from 'ionicons/icons'

export const AddUser: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Spender</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <IonItem>
                <IonLabel position="floating">Name</IonLabel>
                <IonInput type="text" required></IonInput>
              </IonItem>
            </IonCol>
            <IonCol size="12">
              <IonItem>
                <IonLabel position="floating">Monthly Income</IonLabel>
                <IonInput type="number" required></IonInput>
              </IonItem>
            </IonCol>
            <IonCol size="12">
              <IonButton type="submit" color="success" expand="full" size="large">
                Next
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}
