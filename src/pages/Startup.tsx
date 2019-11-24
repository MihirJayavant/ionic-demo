import React, { useEffect } from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { RouterProps } from 'react-router'

export const Startup = (props: RouterProps) => {
  useEffect(() => {
    props.history.push('/addUser')
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Spender</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div></div>
      </IonContent>
    </IonPage>
  )
}
