import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonFab,
    IonFabButton,
    IonIcon
  } from "@ionic/react";
  import React from "react";
  
  export const Startup: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Spender</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <div>Hi its ionic</div>
          <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton>
              <IonIcon name="add" />
            </IonFabButton>
          </IonFab>
        </IonContent>
      </IonPage>
    );
  };
  
  