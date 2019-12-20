import React, { useEffect } from 'react'
import { IonContent, IonPage } from '@ionic/react'
import { RouterProps } from 'react-router'

export const Startup = (props: RouterProps) => {
  useEffect(() => {
    props.history.push('/addUser')
  }, [])

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <div/>
      </IonContent>
    </IonPage>
  )
}
