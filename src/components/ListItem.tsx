import React from 'react'
import { IonGrid, IonRow, IonCol, IonIcon, IonLabel } from '@ionic/react'
import { arrowDown, arrowUp } from 'ionicons/icons'

interface IProps {
  id: number
  title: string
  description: string
  up: boolean
}

export const ListItem = (props: IProps) => {
  return (
    <IonGrid>
      <IonRow>
        <IonCol size="auto">
          <IonIcon size="large" color={props.up ? 'success' : 'danger'} icon={props.up ? arrowUp : arrowDown} />
        </IonCol>
        <IonCol>
          <IonLabel>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
          </IonLabel>
        </IonCol>
        <IonCol size="auto">
          <IonLabel>
            <h1>$ 10</h1>
          </IonLabel>
        </IonCol>
      </IonRow>
    </IonGrid>
  )
}
