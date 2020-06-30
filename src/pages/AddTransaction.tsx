import React from 'react'
import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
  IonDatetime,
  IonSelect,
  IonSelectOption,
} from '@ionic/react'
import { RouterProps } from 'react-router'

export const AddTransaction = (props: RouterProps) => {
  const onCLick = () => {
    props.history.push('/home')
  }

  return (
    <IonPage>
      <IonContent>
        <div className="hero">
          <div className="title">Spender</div>
          <div className="sub-title">Analyze your expenditure</div>
        </div>
        <IonGrid className="ion-padding">
          <IonRow>
            <IonCol size="12">
              <IonItem>
                <IonLabel position="floating">Title</IonLabel>
                <IonInput type="text" required={true} />
              </IonItem>
            </IonCol>
            <IonCol size="12">
              <IonItem>
                <IonLabel position="floating">Description</IonLabel>
                <IonInput type="text" required={true} />
              </IonItem>
            </IonCol>
            <IonCol size="12">
              <IonItem>
                <IonLabel position="floating">Amount</IonLabel>
                <IonInput type="number" required={true} />
              </IonItem>
            </IonCol>
            <IonCol size="12">
              <IonItem>
                <IonLabel position="floating">Date</IonLabel>
                <IonDatetime />
              </IonItem>
            </IonCol>
            <IonCol size="12">
              <IonItem>
                <IonLabel position="floating"> Type </IonLabel>
                <IonSelect value={'debited'}>
                  <IonSelectOption value="credited">Credited</IonSelectOption>
                  <IonSelectOption value="debited">Debited</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonCol>
            <IonCol size="12">
              <IonButton type="button" color="success" expand="full" size="large" onClick={onCLick}>
                Next
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}
