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
} from '@ionic/react'
import { add } from 'ionicons/icons'
import { ListItem } from '../components'
import { RouterProps } from 'react-router'

export const Home = (props: RouterProps) => {
  const addTransaction = () => {
    props.history.push('/addTransaction')
  }

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
            <ListItem id={1} title="Netflix" description="Media content" up={true} />
          </IonItem>
          <IonItem>
            <ListItem id={2} title="Hotstar" description="Media content" up={false} />
          </IonItem>
        </IonList>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={addTransaction}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  )
}
