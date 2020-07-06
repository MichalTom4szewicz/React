import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonButton,
  IonNote,
} from '@ionic/react';

import React from 'react';
import {addOutline,mailOutline, mailSharp, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';


const appPages = [
  {
    title: 'Main Page',
    url: '/page/Main',
    iosIcon: addOutline,
    mdIcon: trashSharp
  },
  {
    title: 'Quiz Create',
    url: '/quizcreate',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
    title: 'Quiz Choice',
    url: '/quizchoice',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  }
];

const Menu = (props) => {


  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>QuizApp</IonListHeader>

          {props.errorMsg}
          {props.user === null ? props.loginForm():
          <>
            <IonNote>{props.user.username} logged in</IonNote>
            <IonButton routerLink={"/"} onClick={event => {
              window.localStorage.clear()
              props.setUser(null)
            }}> log out </IonButton>

            {appPages.map((appPage, index) => {
              return (
                <IonMenuToggle key={index} autoHide={false}>
                  <IonItem routerLink={appPage.url} routerDirection="none" lines="none" detail={false}> {/* routerLink nie odswieza/ nie rerenderuje */}
                    <IonIcon slot="start" icon={appPage.iosIcon} />
                    <IonLabel>{appPage.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              );
            })}
            </>}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
